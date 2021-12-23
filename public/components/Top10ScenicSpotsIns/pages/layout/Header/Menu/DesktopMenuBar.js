import {useRef} from 'react'
import PropTypes from 'prop-types'
import {Box} from '@mui/material'
import NavBar from './NavBar'

function ownerDocument(node) {
  return (node && node.ownerDocument) || document
}

function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling
  }
  return disableListWrap ? null : list.firstChild
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling
  }
  return disableListWrap ? null : list.lastChild
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true
  }
  let text = nextFocus.innerText
  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent
  }
  text = text.trim().toLowerCase()
  if (text.length === 0) {
    return false
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0]
  }
  return text.indexOf(textCriteria.keys.join('')) === 0
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false)

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return
      }
      wrappedOnce = true
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true'

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap)
    } else {
      nextFocus.focus()
      return
    }
  }
}

const DesktopMenuBar = (props) => {
  const {isDarkMode, handleDarkModeChange, iconMenusData} = props

  const disableListWrap = false
  const disabledItemsFocusable = false
  const listRef = useRef(null)
  const handleKeyDown = (event) => {
    const list = listRef.current
    const {key} = event
    const currentFocus = ownerDocument(list).activeElement

    if (key === 'ArrowRight') {
      event.preventDefault()
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem)
    } else if (key === 'ArrowLeft') {
      event.preventDefault()
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem)
    } else if (key === 'Home') {
      event.preventDefault()
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem)
    } else if (key === 'End') {
      event.preventDefault()
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem)
    }
  }

  return (
    <Box data-ref='desktopMenu' role='menubar' onKeyDown={handleKeyDown} ref={listRef} sx={{display: 'flex'}}>
      <NavBar isDarkMode={isDarkMode} handleDarkModeChange={handleDarkModeChange} iconMenusData={iconMenusData} />
    </Box>
  )
}

DesktopMenuBar.propTypes = {
  isDarkMode: PropTypes.bool,
  handleDarkModeChange: PropTypes.func,
  iconMenusData: PropTypes.array
}

export default DesktopMenuBar
