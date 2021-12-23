/**
 * @file   : UserLayout.js
 * @author : yangping.meng (yangping.meng@AspiraConnect.com)
 * @date   : 8/23/2021, 3:35:57 PM
 */

import PropTypes from 'prop-types'
import {useState} from 'react'
import {MenuItem, MenuList, Popover, Box, IconButton, Avatar, Button} from '@mui/material'
import {T, useT} from 'i18n'
import ATypography from 'mui/ATypography'
import muiIconList from 'mui/IconList'

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

  const loginLabelText = useT({k: 'Common.headerBar.login'})
  const logoutLabelText = useT({k: 'Common.headerBar.logout'})

  return (
    <Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {isDesktopView && !user.loggedIn && (
          <Button color='secondary' onClick={handleLogin} data-ref='login-sign-up-button'>
            <ATypography ml={2} mr={1} color='textPrimary'>
              <T k='Common.headerBar.login' />
            </ATypography>
          </Button>
        )}
        {isDesktopView && user.loggedIn && (
          <ATypography ml={2} mr={1} color='textPrimary' dataRef='user-name-txt'>
            {getUserName(user).fullName}
          </ATypography>
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
            <muiIconList.AccountCircle fontSize='large' />
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
