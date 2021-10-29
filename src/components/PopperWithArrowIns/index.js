import {useRef, useState} from 'react'
import {Typography, Box, Button, Grid} from '@mui/material'
import useDeviceView from '../../hooks/useDeviceView'
import PopperWithArrow from '../shared/PopperWithArrow'
import APaper from '../shared/APaper'

const popperComp = () => (
  <Box data-ref='popper-comp' sx={{py: '0.25rem', px: '0.75rem', maxWidth: '30rem'}}>
    <Typography data-ref='popper-content' variant='body2' sx={{py: '0.625rem'}}>
      {`Website Level Config to hide the fee line items on site details: Please demonstrate, system supports website
      level configuration to hide the display of Fee line items (and pop-ups) and Total). Default: false i.e. this info
      shall be displayed. If true, the section below shall not be displayed`}
    </Typography>
  </Box>
)

const PopperWithArrowIns = () => {
  const anchorEl = useRef()
  const popperTitle = 'Popper Title'
  const popperAriaLabelText = 'popper-with-arrow'
  const [open, setOpen] = useState(false)
  const {isDesktopView} = useDeviceView()
  const placement = isDesktopView ? 'right' : 'top'
  return (
    <APaper>
      <Grid display='flex' alignItems='center' sx={{minHeight: '20rem'}}>
        <Button ref={anchorEl}>
          <Typography onClick={() => setOpen((prev) => !prev)}>Toggle Popper</Typography>
        </Button>
        <PopperWithArrow
          open={open}
          setOpen={setOpen}
          title={popperTitle}
          content={popperComp()}
          anchorEl={anchorEl.current}
          placement={placement}
          disablePortal
          ariaLabelContent={popperAriaLabelText}
        />
      </Grid>
    </APaper>
  )
}

export default PopperWithArrowIns
