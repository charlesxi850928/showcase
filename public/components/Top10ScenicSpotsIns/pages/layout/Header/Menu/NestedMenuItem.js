import {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {MenuItem, MenuList, Popover} from '@mui/material'
import muiIconList from '../../../../mui/IconList'

const NestedMenuItem = (props) => {
  const {text, subItems = [], tabIndex: tabIndexProp, disabled, children, showDownIcon = true, ...otherProps} = props
  const menuItemRef = useRef(null)
  const [open, setOpen] = useState(false)
  let tabIndex
  if (!disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleContainerKeyDown = (event) => {
    if (event.key === 'Enter') {
      setOpen(true)
    }
  }

  const handlePopoverKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Tab') {
      setOpen(false)
    }
  }

  return subItems.length > 0 ? (
    <MenuItem
      ref={menuItemRef}
      {...otherProps}
      tabIndex={tabIndex}
      aria-haspopup='true'
      aria-expanded={open}
      onKeyDown={handleContainerKeyDown}
      onClick={handleToggle}
      sx={otherProps.sx}
    >
      {children}
      {showDownIcon && <muiIconList.KeyboardArrowDownIcon />}

      <Popover
        anchorEl={menuItemRef.current}
        disablePortal
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        onKeyDown={handlePopoverKeyDown}
      >
        <MenuList autoFocusItem={open} variant='selectedMenu' disablePadding>
          {subItems}
        </MenuList>
      </Popover>
    </MenuItem>
  ) : (
    <MenuItem ref={menuItemRef} {...otherProps} tabIndex={tabIndex} sx={otherProps.sx}>
      {children}
    </MenuItem>
  )
}

NestedMenuItem.propTypes = {
  text: PropTypes.string,
  subItems: PropTypes.array,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  showDownIcon: PropTypes.bool
}

export default NestedMenuItem
