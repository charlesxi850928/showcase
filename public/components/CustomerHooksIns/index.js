import {useState, useEffect} from 'react'
import {Grid, TextField, Avatar, Box, Typography, Badge} from '@mui/material'
import LaptopWindowsTwoToneIcon from '@mui/icons-material/LaptopWindowsTwoTone'
import APaper from 'components/shared/APaper'
import {stringAvatar} from 'components/shared/util'

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e) => setValue(e.target.value)

  return {
    value,
    onChange: handleChange
  }
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

const CustomerHooksIns = () => {
  const firstName = useFormInput('Charles')
  const lastName = useFormInput('Xi')
  const name = `${firstName?.value} ${lastName?.value}`
  useDocumentTitle(name)
  const width = useWindowWidth()

  return (
    <Box>
      <APaper>
        <Grid container display='flex' alignItems='flex-start' direction='column'>
          <Grid item>
            <TextField sx={{mt: '1rem'}} fullWidth {...firstName} label='First Name' variant='outlined' />
            <TextField sx={{mt: '1rem'}} fullWidth {...lastName} label='Last Name' variant='outlined' />
            <Box sx={{display: 'flex', alignItems: 'center', mt: '1rem'}}>
              {firstName?.value.trim() && lastName?.value.trim() && <Avatar {...stringAvatar(name)} />}
              <Typography sx={{ml: '0.5rem', fontWeight: 600}}>{name}</Typography>
            </Box>
            <Badge sx={{mt: '1rem'}} color='secondary' badgeContent={width} max={4096}>
              <LaptopWindowsTwoToneIcon fontSize='large' />
            </Badge>
          </Grid>
        </Grid>
      </APaper>
    </Box>
  )
}

export default CustomerHooksIns
