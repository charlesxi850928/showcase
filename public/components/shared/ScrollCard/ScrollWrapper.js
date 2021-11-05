import {Box, Button, useMediaQuery} from '@mui/material'
import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {ChevronLeft, ChevronRight} from '@mui/icons-material'

const TRANSFORM_DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right'
}
const scrollWrapperClass = {
  overflowX: 'hidden',
  display: 'flex',
  width: '100%',
  pb: 0.5,
  alignItems: 'stretch'
}
const root = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
}
const buttonSize = '2.5rem'
const scrollButtons = {
  width: buttonSize,
  height: buttonSize,
  minWidth: buttonSize,
  borderRadius: '100%',
  position: 'absolute'
}
const LargeSize = '(min-width:1000px)'
const MediumSize = '(min-width:750px)'
const SmallSize = '(min-width:620px)'
/**
 *
 * @param {string} buttonPosition  value:'defaultCenter' | 'topRight'
 * @returns
 */
const ScrollWrapper = (props) => {
  const {children, lg = 4, md = 3, sm = 2, buttonPosition = 'defaultCenter'} = props
  const scrollRef = useRef(null)
  const [maxItemNumber, setMaxItemNumber] = useState(lg)
  const [activeIndexRange, setActiveIndexRange] = useState({left: 0, right: maxItemNumber - 1})
  const [isItemTransform, setIsItemTransform] = useState(false)

  const isLg = useMediaQuery(LargeSize)
  const isMd = useMediaQuery(MediumSize)
  const isSm = useMediaQuery(SmallSize)

  useEffect(() => {
    if (isLg) {
      setMaxItemNumber(lg)
    } else if (isMd) {
      setMaxItemNumber(md)
    } else if (isSm) {
      setMaxItemNumber(sm)
    }
  }, [isSm, isMd, isLg])

  useEffect(() => {
    if (activeIndexRange.left + maxItemNumber > children.length - 1) {
      if (children.length > maxItemNumber) {
        setActiveIndexRange({left: children.length - maxItemNumber, right: children.length - 1})
      } else {
        setActiveIndexRange({left: 0, right: children.length - 1})
      }
    } else {
      setActiveIndexRange({left: activeIndexRange.left, right: activeIndexRange.left + maxItemNumber - 1})
    }
  }, [maxItemNumber])

  const handleClick = (type) => {
    if (isItemTransform) return
    const {left, right} = activeIndexRange
    let nextLeft = null
    let nextRight = null
    if (type === TRANSFORM_DIRECTION.LEFT) {
      nextLeft = left - 1
      nextRight = right - 1
    } else {
      nextLeft = left + 1
      nextRight = right + 1
    }
    setIsItemTransform(true)
    setActiveIndexRange({left: nextLeft, right: nextRight})
    scrollRef.current.setAttribute('aria-live', 'polite')
    setTimeout(() => {
      setIsItemTransform(false)
      scrollRef.current.setAttribute('aria-live', 'off')
    }, 600)
  }

  const getRightButton = () => {
    const styleTopRight = {
      ...scrollButtons
    }
    const styleRightCenter = {
      right: '-3rem',
      ...scrollButtons
    }
    return (
      <Button
        aria-label='Scroll Right'
        data-ref='scroll-view-right-button'
        onClick={() => handleClick(TRANSFORM_DIRECTION.RIGHT)}
        variant='outlined'
        sx={buttonPosition === 'topRight' ? styleTopRight : styleRightCenter}
        disabled={activeIndexRange.right === children.length - 1}
      >
        <ChevronRight />
      </Button>
    )
  }
  const getLeftButton = () => {
    const styleTopRight = {
      marginRight: '100%',
      ...scrollButtons
    }
    const styleLeftCenter = {
      left: '-3rem',
      ...scrollButtons
    }
    return (
      <Button
        aria-label='Scroll left'
        date-ref='scroll-view-left-button'
        onClick={() => handleClick(TRANSFORM_DIRECTION.LEFT)}
        variant='outlined'
        disabled={activeIndexRange.left === 0}
        sx={buttonPosition === 'topRight' ? styleTopRight : styleLeftCenter}
      >
        <ChevronLeft />
      </Button>
    )
  }
  const getStyle = () => ({transform: `translateX(-${activeIndexRange.left * 100}%)`})

  return (
    <Box sx={root}>
      {buttonPosition === 'topRight' ? (
        <Box
          sx={{
            position: 'absolute',
            right: '0.5rem',
            top: '-3rem',
            width: `calc(${buttonSize} + 0.5rem)`,
            height: buttonSize,
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          {children.length > maxItemNumber && getLeftButton()}
          {children.length > maxItemNumber && getRightButton()}
        </Box>
      ) : (
        <>
          {children.length > maxItemNumber && activeIndexRange.left !== 0 && getLeftButton()}
          {activeIndexRange.right !== children.length - 1 && children.length > maxItemNumber && getRightButton()}
        </>
      )}

      <Box sx={scrollWrapperClass} aria-live='polite' ref={scrollRef}>
        {children.map((item, index) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            role='group'
            aria-label={`${index + 1} of ${children.length}`}
            sx={{
              display: 'block',
              px: 1,
              visibility:
                (activeIndexRange.left <= index && index <= activeIndexRange.right) ||
                (isItemTransform && activeIndexRange.left - 1 === index) ||
                (isItemTransform && activeIndexRange.right + 1 === index)
                  ? 'visible'
                  : 'hidden',
              transition: 'transform 0.6s ease-in-out',
              ...getStyle(index),
              maxWidth: 1 / maxItemNumber,
              flex: `0 0 ${children.length > maxItemNumber ? (1 / maxItemNumber) * 100 : (1 / children.length) * 100}%`
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

ScrollWrapper.propTypes = {
  // buttonStyles: PropTypes.object,
  // margin: PropTypes.number,
  children: PropTypes.any,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  buttonPosition: PropTypes.string
}

export default ScrollWrapper
