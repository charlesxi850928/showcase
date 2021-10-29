import {Backdrop, CircularProgress} from '@mui/material'
import {useState} from 'react'

const ABackdrop = () => {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} open={open} onClick={handleClose}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default ABackdrop
