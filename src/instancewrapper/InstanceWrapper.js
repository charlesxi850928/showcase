import {useState, useEffect} from 'react'
import {Grid, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import lodash from 'lodash'
import ACodeMirror from 'components/shared/ACodeMirror'
import APaper from 'components/shared/APaper'

async function getCode(path) {
  let newPath = path
  if (newPath.indexOf('.scss') > -1) {
    newPath = path
  } else if (newPath.indexOf('.js') < 0) {
    newPath = `${path}.js`
  }
  let response = await fetch(newPath)
  let code = await response.text()
  if (code?.toLocaleLowerCase()?.indexOf('<!doctype html>') > -1) {
    newPath = `${path}/index.js`
    response = await fetch(newPath)
    code = await response.text()
  }

  return code
}

async function fetchCodes(name, extraCodePaths) {
  const codes = []
  let path = `components/${name}/index.js`
  const code = await getCode(path)
  codes.push({
    name: 'index.js',
    path,
    code
  })
  let lines = lodash.split(code, '\n').filter((line) => line.indexOf('shared/') > -1 && line.indexOf('import ') > -1)
  lines = [...lines, ...extraCodePaths]
  lines.forEach((line) => {
    let fileName = ''
    if (line.endsWith('.js')) {
      fileName = `${line.substring(line.lastIndexOf('/') + 1)}`
      path = line
    } else if (line.endsWith('.scss')) {
      fileName = `${line.substring(line.lastIndexOf('/') + 1, line.lastIndexOf('.scss') + 5)}`
      path = line
    } else if (line.indexOf("'") > -1) {
      fileName = `${line.substring(line.lastIndexOf('/') + 1, line.lastIndexOf("'"))}`
      path = line.substring(line.indexOf("'") + 1, line.lastIndexOf("'"))
    } else {
      fileName = `${line.substring(line.lastIndexOf('/') + 1)}`
      path = `${line}/index.js`
    }
    let lastLevel = line.substring(0, line.lastIndexOf(`/${fileName}`))
    lastLevel = lastLevel.substring(lastLevel.lastIndexOf('/') + 1)
    fileName = lastLevel !== 'shared' ? `${lastLevel}/${fileName}` : fileName
    codes.push({
      name: fileName,
      path,
      code: ''
    })
  })
  return codes
}

const InstanceWrapper = ({name, comp, extraCodePaths = []}) => {
  const [expanded, setExpanded] = useState('panel-0')
  const [codes, setCodes] = useState(null)

  const handleChange = (panel, code) => async (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
    if (code.code === '') {
      const loadCode = await getCode(code.path)
      const newCodes = codes.map((codex) => {
        const newCode = {...codex}
        if (newCode.name === code.name) {
          newCode.code = loadCode
        }
        return newCode
      })
      setCodes([...newCodes])
    }
  }

  useEffect(async () => {
    const newCodes = await fetchCodes(name, extraCodePaths)
    setCodes(newCodes)
  }, [name])

  return (
    <Grid>
      <Grid>{comp}</Grid>
      <Grid>
        <APaper sx={{paddingX: 0, paddingY: 0}}>
          {codes &&
            codes?.map((code, index) => (
              <Accordion
                key={code.name}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`, code)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <Typography sx={{fontWeight: 600}}>{`${code.name}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ACodeMirror code={code.code} />
                </AccordionDetails>
              </Accordion>
            ))}
        </APaper>
      </Grid>
    </Grid>
  )
}

InstanceWrapper.propTypes = {
  name: PropTypes.string,
  comp: PropTypes.node,
  extraCodePaths: PropTypes.array
}

export default InstanceWrapper
