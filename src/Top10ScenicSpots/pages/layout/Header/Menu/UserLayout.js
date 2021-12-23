/**
 * @file   : UserLayout.js
 * @author : yangping.meng (yangping.meng@AspiraConnect.com)
 * @date   : 8/23/2021, 3:35:57 PM
 */

import PropTypes from 'prop-types'
import {useState} from 'react'
import {MenuItem, MenuList, Popover, Box, IconButton, Avatar, Button, Typography} from '@mui/material'

const UserLayout = ({user, isDesktopView, handleLogin, handleLoginOut}) => {
  const getUserName = (userInfo) => {
    const fullName = `${userInfo.firstName} ${userInfo.lastName}`
    const nameAbridge = `${userInfo.firstName.split(' ')[0][0]}${userInfo.lastName.split(' ')[0][0]}`
    return {fullName, nameAbridge}
  }

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const loginLabelText = 'Sign In'
  const logoutLabelText = 'Sign Out'

  return (
    <Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {isDesktopView && !user.loggedIn && (
          <Button color='secondary' onClick={handleLogin} data-ref='login-sign-up-button'>
            <Typography ml={2} mr={1} color='textPrimary'>
              Login
            </Typography>
          </Button>
        )}
        {isDesktopView && user.loggedIn && (
          <Typography ml={2} mr={1} color='textPrimary' dataRef='user-name-txt'>
            {getUserName(user).fullName}
          </Typography>
        )}

        {user.loggedIn ? (
          <Avatar
            sx={{p: 0, bgcolor: 'common.black'}}
            alt='user name avatar'
            onClick={handleClick}
            data-ref='user-avatar'
          >
            {getUserName(user).nameAbridge}
          </Avatar>
        ) : (
          <IconButton aria-label={loginLabelText} sx={{p: 0}} onClick={handleLogin} data-ref='login-icon-button'>
            {/* <muiIconList.AccountCircle fontSize='large' /> */}
          </IconButton>
        )}
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disablePortal
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
        data-ref='user-info-popover'
      >
        <MenuList autoFocusItem={open} variant='selectedMenu' disablePadding>
          <MenuItem onClick={handleLoginOut} data-ref='log-out-button'>
            {logoutLabelText}
          </MenuItem>
        </MenuList>
      </Popover>
    </Box>
  )
}

UserLayout.propTypes = {
  user: PropTypes.object,
  handleLoginOut: PropTypes.func,
  handleLogin: PropTypes.func,
  isDesktopView: PropTypes.bool
}

export default UserLayout
