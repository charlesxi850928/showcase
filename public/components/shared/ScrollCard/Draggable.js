import {useRef, useEffect, useCallback} from 'react'
import {Box} from '@mui/material'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import styles from './Draggable.module.scss'

function Draggable(props) {
  const {children, className, sx} = props

  // position
  const pos = useRef({top: 0, left: 0, x: 0, y: 0})
  const containerElm = useRef(/** @type {HTMLDivElement} */ (null))

  const mouseMoveHandler = useCallback((e) => {
    const dx = e.clientX - pos.current.x
    const dy = e.clientY - pos.current.y
    if (containerElm.current) {
      containerElm.current.scrollTop = pos.current.top - dy
      containerElm.current.scrollLeft = pos.current.left - dx
    }
  }, [])

  const mouseUpHandler = useCallback(() => {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

    if (containerElm.current) {
      containerElm.current.style.cursor = 'grab'
      containerElm.current.style.removeProperty('user-select')
    }
  }, [mouseMoveHandler])

  const mouseDownHandler = useCallback(
    (e) => {
      pos.current = {
        // The current scroll
        left: containerElm?.current?.scrollLeft,
        top: containerElm?.current?.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY
      }
      if (containerElm.current) {
        containerElm.current.style.cursor = 'grabbing'
        containerElm.current.style.userSelect = 'none'
      }

      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    },
    [mouseMoveHandler, mouseUpHandler]
  )

  useEffect(() => {
    const container = containerElm.current

    container.addEventListener('mousedown', mouseDownHandler)
    return () => {
      container.removeEventListener('mousedown', mouseDownHandler)
    }
  }, [mouseDownHandler])

  return (
    <Box ref={containerElm} className={clsx(styles.draggableContainer, className)} sx={sx}>
      {children}
    </Box>
  )
}

Draggable.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  sx: PropTypes.object
}

export default Draggable
