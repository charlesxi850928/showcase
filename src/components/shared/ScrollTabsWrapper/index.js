import {Children, useRef, useState, useEffect} from 'react'
import {Box, Button} from '@mui/material'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import {isUndefined} from 'components/shared/util'
import {useTabContext, getPanelId} from '@mui/lab/TabContext'
import {ChevronLeft, ChevronRight} from '@mui/icons-material'

const TAB_BTN_ID_PREFIX = 'tab-btn-'
const SCROLL_DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right'
}

const buttonSize = '2rem'

const scrollButtons = {
  width: buttonSize,
  height: buttonSize,
  minWidth: buttonSize,
  border: 0,
  color: 'common.grayscale3',
  padding: 0,
  '&:hover': {
    border: 0
  }
}

function ownerDocument(node) {
  return (node && node.ownerDocument) || document
}

function getCurrentTabOffSet(slides, newCurrentIndex) {
  return Array.from(slides)
    .slice(0, newCurrentIndex)
    .map((slide) => slide?.getBoundingClientRect().width)
    .reduce((s1, s2) => s1 + s2, 0)
}

function getAdjustmentTabIndex(slides, currentIndex, setAdjustmentTabIndexRequired) {
  let currentTabLeftWidth = slides[currentIndex]?.getBoundingClientRect().left
  let adjustmentIndex = 0
  while (currentTabLeftWidth > 0 && currentIndex > 1) {
    currentTabLeftWidth -= slides[currentIndex - adjustmentIndex - 1]?.getBoundingClientRect().width
    if (currentTabLeftWidth > 0) adjustmentIndex += 1
  }
  setAdjustmentTabIndexRequired(false)
  return currentIndex - adjustmentIndex
}

function ScrollTabsWrapper(props) {
  const {children, sx, currentTab, setCurrentTab, ariaLabel, indicatorColor = 'primary'} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [adjustmentTabIndexRequired, setAdjustmentTabIndexRequired] = useState(false)
  const [shouldShowLeftButton, setShouldShowLeftButton] = useState(false)
  const [shouldShowRightButton, setShouldShowRightButton] = useState(false)
  const scrollLeftText = 'scroll left'
  const scrollRightText = 'scroll right'
  const containerElm = useRef(/** @type {HTMLDivElement} */ (null))
  const tabContext = useTabContext()
  const updateScrollButtonState = (scrollContainer) => {
    const {clientWidth, scrollLeft} = scrollContainer
    const slidesTotalWidth = Array.from(scrollContainer?.children)
      .map((slide) => slide?.getBoundingClientRect().width)
      .reduce((s1, s2) => s1 + s2, 0)

    setShouldShowLeftButton(scrollLeft > 0)
    setShouldShowRightButton(clientWidth + scrollLeft < slidesTotalWidth - 1)
  }

  useEffect(() => {
    const tabsContainer = containerElm.current
    updateScrollButtonState(tabsContainer)
  }, [])

  const handleTabsScroll = debounce((evt) => {
    updateScrollButtonState(evt.target)
  }, 100)

  useEffect(() => {
    const tabsContainer = containerElm.current
    tabsContainer.addEventListener('scroll', handleTabsScroll)
    return () => tabsContainer.removeEventListener('scroll', handleTabsScroll)
  }, [handleTabsScroll])

  function handleScrollTo(container, slides, newCurrentIndex, controlBtnTriggered) {
    if (isUndefined(newCurrentIndex)) return

    const newTransformOffSet = getCurrentTabOffSet(slides, newCurrentIndex)

    const {clientWidth, scrollLeft} = container
    const currentTabWidth = slides[newCurrentIndex]?.getBoundingClientRect().width
    const currentTabOffsetLeft = slides[newCurrentIndex]?.getBoundingClientRect().left
    // 1. trigger to scroll when current selected tab display incomplete
    // 2. control button be trigger
    if (
      scrollLeft > newTransformOffSet ||
      currentTabOffsetLeft + currentTabWidth > clientWidth ||
      controlBtnTriggered
    ) {
      container.scrollTo({
        left: newTransformOffSet,
        behavior: 'smooth'
      })
      setCurrentIndex(newCurrentIndex)
      setAdjustmentTabIndexRequired(!controlBtnTriggered)
    }

    updateScrollButtonState(container)
  }

  const handleToLeftRightClick = (type) => {
    const container = containerElm.current
    const slides = container?.children

    let newCurrentIndex = adjustmentTabIndexRequired
      ? getAdjustmentTabIndex(slides, currentIndex, setAdjustmentTabIndexRequired)
      : currentIndex
    if (type === SCROLL_DIRECTION.LEFT && newCurrentIndex > 0) {
      newCurrentIndex = Number(newCurrentIndex) - 1
    } else if (newCurrentIndex < slides.length - 1) {
      newCurrentIndex = Number(newCurrentIndex) + 1
    }
    if (!isUndefined(newCurrentIndex)) {
      handleScrollTo(container, slides, newCurrentIndex, true)
    }
  }

  function handleTabClick(event, currentTabIndex) {
    const tabsContainer = containerElm.current
    const slides = tabsContainer?.children
    // setCurrentIndex(currentTabIndex)
    handleScrollTo(tabsContainer, slides, currentTabIndex, false)
    setCurrentTab(event, currentTabIndex)
  }

  // Support Accessibility Behavior Perfect meet
  const handleKeyDown = (event) => {
    const tabsContainer = containerElm.current
    const slides = tabsContainer?.children
    const {key} = event
    const currentFocus = ownerDocument(tabsContainer).activeElement

    if (key === 'Tab') {
      handleScrollTo(
        tabsContainer,
        slides,
        Number(currentFocus.getAttribute('id').replace(TAB_BTN_ID_PREFIX, '')),
        false
      )
    }
  }

  const getRightButton = () => {
    const styleRightCenter = {
      ...scrollButtons,
      marginRight: '-0.5rem'
    }
    return (
      <Button
        aria-label={scrollRightText}
        data-ref='scroll-view-right-button'
        onClick={() => handleToLeftRightClick(SCROLL_DIRECTION.RIGHT)}
        variant='outlined'
        sx={styleRightCenter}
      >
        <ChevronRight />
      </Button>
    )
  }

  const getLeftButton = () => {
    const styleLeftCenter = {
      ...scrollButtons,
      marginLeft: '-0.5rem'
    }
    return (
      <Button
        aria-label={scrollLeftText}
        date-ref='scroll-view-left-button'
        onClick={() => handleToLeftRightClick(SCROLL_DIRECTION.LEFT)}
        variant='outlined'
        sx={styleLeftCenter}
      >
        <ChevronLeft />
      </Button>
    )
  }

  return (
    <Box display='flex' alignItems='center' aria-label={ariaLabel} role='tablist'>
      {shouldShowLeftButton && getLeftButton()}
      <Box
        onKeyDown={handleKeyDown}
        ref={containerElm}
        sx={{
          ...sx,
          cursor: 'grab',
          overflow: 'auto',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',

          '&::-webkit-scrollbar': {
            display: 'none'
          },
          // overflow: 'hidden',
          '& button': {
            color: 'common.grayscale2',
            padding: 0
          }
        }}
      >
        {Children.map(children, (child, index) => (
          <Box
            className={String(index) === currentTab ? 'selected' : ''}
            sx={{flexShrink: 0}}
            aria-controls={getPanelId(tabContext, String(index))}
            id={getPanelId(tabContext, String(index))?.replace('-P-', '-T-')}
          >
            <Button
              role='tab'
              // tabIndex={String(index) === currentTab ? '0' : '-1'}
              aria-selected={String(index) === currentTab ? 'true' : 'false'}
              onClick={(event) => handleTabClick(event, String(index))}
              id={`${TAB_BTN_ID_PREFIX}${index}`}
            >
              {child}
            </Button>
            {String(index) === currentTab && (
              <Box
                data-ref='indicator'
                className='indicator'
                sx={{
                  backgroundColor: (theme) =>
                    indicatorColor === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
                  height: 2
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      {shouldShowRightButton && getRightButton()}
    </Box>
  )
}

ScrollTabsWrapper.propTypes = {
  children: PropTypes.any,
  sx: PropTypes.object,
  currentTab: PropTypes.string,
  setCurrentTab: PropTypes.func,
  ariaLabel: PropTypes.string,
  indicatorColor: PropTypes.oneOf(['primary', 'secondary'])
}

export default ScrollTabsWrapper
