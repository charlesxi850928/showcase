import PropTypes from 'prop-types'
import {useRef, useEffect, useReducer, useState} from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import {Grid, Box, Typography, LinearProgress, IconButton} from '@mui/material'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import FastForwardIcon from '@mui/icons-material/FastForward'

const Slide = ({isCurrent, image, id, takeFocus}) => {
  const {url, title, content} = image
  const ref = useRef()

  useEffect(() => {
    if (isCurrent && takeFocus) {
      ref.current.focus()
    }
  }, [isCurrent, takeFocus])

  return (
    <Grid
      ref={ref}
      component='li'
      arial-hidden={`${!isCurrent}`}
      tabIndex='-1'
      aria-labelledby={id}
      sx={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '40rem',
        width: 'auto',
        display: `${isCurrent ? 'block' : 'none'}`,
        position: 'relative',
        transition: 'opacity 5s'
      }}
    >
      <Box sx={{padding: {md: '2rem'}}}>
        <Box sx={{backgroundColor: 'black', color: 'white', padding: '1rem', maxWidth: '25rem', opacity: '0.6'}}>
          <Typography fontSize={24} fontWeight={600}>
            {title}
          </Typography>
          <Typography sx={{marginTop: '0.25rem'}}>{content}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

Slide.propTypes = {
  isCurrent: PropTypes.bool,
  image: PropTypes.object,
  id: PropTypes.string,
  takeFocus: PropTypes.bool
}

const Slides = ({slides, currentIndex, takeFocus}) => (
  <Grid component='ul' sx={{position: 'relative', overflow: 'hidden', width: '100%', margin: '0', padding: '0'}}>
    {slides.map((image, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Slide key={index} image={image} isCurrent={index === currentIndex} takeFocus={takeFocus} onClick={() => {}} />
    ))}
  </Grid>
)

Slides.propTypes = {
  slides: PropTypes.array,
  currentIndex: PropTypes.number,
  takeFocus: PropTypes.bool
}

const IconButtonWrapper = ({children, onClick}) => (
  <IconButton component='span' onClick={onClick} sx={{margin: 0, padding: 0, color: 'white'}}>
    {children}
  </IconButton>
)

IconButtonWrapper.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
const SlideNavItem = ({isCurrent, onClick}) => (
  <Grid component='span' tabIndex='-1'>
    <IconButton component='span' onClick={onClick} sx={{margin: 0, padding: 0, color: 'white'}}>
      <FiberManualRecordIcon sx={{cursor: 'pointer', fontSize: '1rem', opacity: `${isCurrent ? 1.0 : 0.6}`}} />
    </IconButton>
  </Grid>
)

SlideNavItem.propTypes = {
  isCurrent: PropTypes.bool,
  onClick: PropTypes.func
}
const LinearDeterminate = ({currentIndex, slideDuration}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = 40
        return Math.min(oldProgress + diff, 100)
      })
    }, slideDuration / 5)

    return () => {
      clearInterval(timer)
    }
  }, [currentIndex])

  return <LinearProgress variant='determinate' value={progress} />
}
LinearDeterminate.propTypes = {
  currentIndex: PropTypes.number,
  slideDuration: PropTypes.number
}
const playButtonStyle = {cursor: 'pointer', marginX: '0.25rem', paddingX: '0.25rem'}

const SlideNav = ({
  slides,
  currentIndex,
  slideDuration,
  dispatch,
  isPlaying,
  showNavBtn,
  showControlBtn,
  showProgressBar
}) => (
  <>
    <Grid sx={{color: 'white', position: 'relative', marginTop: '-6rem', height: '6rem'}}>
      <Grid
        sx={{
          marginX: '2rem',
          display: {xs: 'block', md: 'flex'},
          alignItems: 'center',
          justifyContent: {xs: 'center', md: 'space-between'}
        }}
      >
        {showNavBtn && (
          <Grid container justifyContent='center' sx={{paddingY: '0.5rem'}}>
            {slides.map((image, index) => (
              <SlideNavItem
                // eslint-disable-next-line react/no-array-index-key
                key={`${index}`}
                isCurrent={index === currentIndex}
                onClick={() => {
                  dispatch({type: 'GOTO', index})
                }}
              />
            ))}
          </Grid>
        )}
        {showControlBtn && (
          <Grid container justifyContent='center' sx={{paddingY: '0.5rem'}}>
            {isPlaying ? (
              <IconButtonWrapper onClick={() => dispatch({type: 'PAUSE'})}>
                <PauseIcon sx={playButtonStyle} />
              </IconButtonWrapper>
            ) : (
              <IconButtonWrapper onClick={() => dispatch({type: 'PLAY'})}>
                <PlayArrowIcon sx={playButtonStyle} />
              </IconButtonWrapper>
            )}
            <IconButtonWrapper onClick={() => dispatch({type: 'PREV'})}>
              <FastRewindIcon sx={playButtonStyle} />
            </IconButtonWrapper>
            <IconButtonWrapper onClick={() => dispatch({type: 'NEXT'})}>
              <FastForwardIcon sx={playButtonStyle} />
            </IconButtonWrapper>
          </Grid>
        )}
      </Grid>
    </Grid>
    {showProgressBar && (
      <Grid>
        <LinearDeterminate currentIndex={currentIndex} slideDuration={slideDuration} />
      </Grid>
    )}
  </>
)

SlideNav.propTypes = {
  isPlaying: PropTypes.bool,
  slides: PropTypes.array,
  currentIndex: PropTypes.number,
  slideDuration: PropTypes.number,
  dispatch: PropTypes.func,
  showNavBtn: PropTypes.bool,
  showControlBtn: PropTypes.bool,
  showProgressBar: PropTypes.bool
}

const Carousel = (props) => {
  const {slides, slideDuration, showProgressBar = false, showNavBtn = true, showControlBtn = true} = props
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'PROGRESS':
        case 'NEXT':
          return {
            ...prevState,
            takeFocus: false,
            isPlaying: action.type === 'PROGRESS',
            currentIndex: (prevState.currentIndex + 1) % slides.length
          }
        case 'PREV':
          return {
            ...prevState,
            takeFocus: false,
            isPlaying: false,
            currentIndex: (prevState.currentIndex - 1 + slides.length) % slides.length
          }
        case 'GOTO':
          return {
            ...prevState,
            takeFocus: true,
            isPlaying: false,
            currentIndex: action.index
          }
        case 'PLAY':
          return {
            ...prevState,
            takeFocus: false,
            isPlaying: true
          }
        case 'PAUSE':
          return {
            ...prevState,
            takeFocus: false,
            isPlaying: false
          }
        default:
          return prevState
      }
    },
    {
      currentIndex: 0,
      takeFocus: false,
      isPlaying: true
    }
  )

  useEffect(() => {
    let timeout
    if (state.isPlaying) {
      timeout = setTimeout(() => {
        dispatch({type: 'PROGRESS'})
      }, slideDuration)
      return () => clearTimeout(timeout)
    }
    return () => timeout && clearTimeout(timeout)
  }, [state.currentIndex, state.isPlaying])

  return (
    <Grid sx={{backgroundColor: 'black'}}>
      <Slides slides={slides} currentIndex={state.currentIndex} takeFocus={state.takeFocus} />
      <SlideNav
        slideDuration={slideDuration}
        slides={slides}
        currentIndex={state.currentIndex}
        dispatch={dispatch}
        isPlaying={state.isPlaying}
        showNavBtn={showNavBtn}
        showControlBtn={showControlBtn}
        showProgressBar={showProgressBar}
      />
    </Grid>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array,
  slideDuration: PropTypes.number,
  showNavBtn: PropTypes.bool,
  showControlBtn: PropTypes.bool,
  showProgressBar: PropTypes.bool
}

export default Carousel
