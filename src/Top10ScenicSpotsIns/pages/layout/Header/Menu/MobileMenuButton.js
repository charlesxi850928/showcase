import {useState} from 'react'
import PropTypes from 'prop-types'
import {IconButton, Drawer, Box, Divider} from '@mui/material'
import NavBar from './NavBar'

const MobileMenuButton = (props) => {
  const {isDarkMode, handleDarkModeChange, iconMenusData} = props

  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const closeText = 'close'
  const openText = 'open'
  return (
    <>
      <IconButton edge='start' aria-label={openText} onClick={handleDrawerOpen}>
        {/* <muiIconList.Menu /> */}
      </IconButton>

      <Drawer anchor='top' open={open}>
        <Box role='presentation' onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '.5rem .5rem'}}>
            <IconButton onClick={handleDrawerClose} aria-label={closeText}>
              {/* <muiIconList.CloseIcon /> */}
            </IconButton>
          </Box>
          <Divider />
          <NavBar isDarkMode={isDarkMode} handleDarkModeChange={handleDarkModeChange} iconMenusData={iconMenusData} />
        </Box>
      </Drawer>
    </>
  )
}

MobileMenuButton.propTypes = {
  isDarkMode: PropTypes.bool,
  handleDarkModeChange: PropTypes.func,
  iconMenusData: PropTypes.array
}

export default MobileMenuButton
