// @ts-check
import PropTypes from 'prop-types'
import {Box} from '@mui/material'
import {useContext, useState, useEffect, useCallback} from 'react'
import {ArrowBackIosNew, ArrowForwardIos} from '@mui/icons-material'
import {CarouselContext, CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext, Image} from 'pure-react-carousel'
import DefaultImage from '../DefaultImage'
import 'pure-react-carousel/dist/react-carousel.es.css'

/**
 * @typedef {object} OwnerProps
 * @prop {number} currentSlide
 * @prop {number} index
 * @prop {() => void} onFirstLoad
 *
 * @param {OwnerProps & import('pure-react-carousel').ImageProps} props
 * @returns
 */
function LazyLoadImage(props) {
  const {currentSlide, index, onFirstLoad, ...imageProps} = props

  const [wasVisible, setWasVisible] = useState(false)

  const isVisible = currentSlide === index

  useEffect(() => {
    if (!wasVisible && isVisible) {
      onFirstLoad()
    }
  })

  useEffect(() => {
    if (!wasVisible && isVisible) {
      setWasVisible(true)
    }
  }, [wasVisible, isVisible])

  if (!wasVisible) return null

  return <Image {...imageProps} />
}

LazyLoadImage.propTypes = {
  currentSlide: PropTypes.number,
  index: PropTypes.number,
  onFirstLoad: PropTypes.func
}

function CardThumbnail(props) {
  const {imageList} = props

  const totalSlides = imageList.length

  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)

  useEffect(() => {
    function onCarouselContextChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }

    carouselContext.subscribe(onCarouselContextChange)
    return () => carouselContext.unsubscribe(onCarouselContextChange)
  }, [carouselContext])

  const restLoadingState = useCallback(() => {
    carouselContext.setStoreState({masterSpinnerFinished: false})
  }, [carouselContext])

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        '& .cardThumbnailSlider': {
          height: '100%',
          '& .cardThumbnailSlide': {
            height: '100%',
            '& div': {
              outline: 'none'
            }
          },
          '& .carousel__slider-tray-wrapper': {
            height: '100%'
          },
          '& ul': {
            height: '100%',
            '& img': {
              objectFit: 'cover'
            }
          }
        },
        '& .dotGroup': {
          position: 'absolute',
          left: '50%',
          bottom: '0.7rem',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          '& .carousel__dot': {
            height: '0.5rem',
            width: '0.5rem',
            padding: 'unset',
            borderRadius: '50%',
            backgroundColor: 'common.white',
            opacity: 0.6,
            border: 'unset',
            margin: '0 0.1rem'
          },
          '& .carousel__dot--selected': {
            opacity: 0.9
          }
        },
        '&:hover': {
          '.backButton, .nextButton': {
            visibility: 'visible',
            opacity: 0.95
          }
        },
        '& .backButton, .nextButton': {
          visibility: 'hidden',
          opacity: 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          backgroundColor: 'common.white',
          borderRadius: '50%',
          padding: '0.4rem',
          border: 'unset',
          color: 'common.white',
          transition: 'opacity 0.2s',
          '& svg': {
            opacity: 0.95,
            width: '1rem',
            height: '1rem',
            color: 'common.black',
            fontSize: '0.6rem'
          }
        },
        '& .backButton': {
          left: '0.5rem',
          '& svg': {
            transform: 'translateX(-1px)'
          }
        },
        '& .nextButton': {
          right: '0.5rem',
          '& svg': {
            transform: 'translateX(1px)'
          }
        }
      }}
    >
      <Slider
        className='cardThumbnailSlider'
        role='none'
        trayProps={{role: 'listbox', 'aria-label': 'image wrapper'}}
        tabIndex={-1}
      >
        {imageList.map((image, index) => (
          <Slide className='cardThumbnailSlide' key={image.url} index={index} tabIndex={-1}>
            <LazyLoadImage
              index={index}
              hasMasterSpinner
              currentSlide={currentSlide}
              onFirstLoad={restLoadingState}
              src={image?.url}
              alt={image?.alt}
            />
          </Slide>
        ))}
      </Slider>
      {totalSlides > 1 && (
        <>
          <Box className='dotGroup' onClick={(event) => event.stopPropagation()}>
            {imageList.map((image, index) => (
              <Dot key={image.url} slide={index} aria-label={`dot ${index + 1}`} />
            ))}
          </Box>
          <ButtonBack className='backButton' aria-label='back' onClick={(event) => event.stopPropagation()}>
            <ArrowBackIosNew />
          </ButtonBack>
          <ButtonNext className='nextButton' aria-label='next' onClick={(event) => event.stopPropagation()}>
            <ArrowForwardIos />
          </ButtonNext>
        </>
      )}
    </Box>
  )
}

CardThumbnail.propTypes = {
  imageList: PropTypes.any
}

/**
 *
 * @param {{imageList: {url: string, alt: string}[], dragEnabled: boolean}} props
 */
function CardThumbnailContainer(props) {
  const {imageList, dragEnabled = false} = props

  const totalSlides = imageList?.length

  if (!totalSlides || totalSlides === 0) {
    return <DefaultImage />
  }

  return (
    <Box className='cardThumbnail' sx={{height: '100%', width: 'auto', '.carousel': {height: '100%'}}}>
      <CarouselProvider
        naturalSlideHeight={2}
        naturalSlideWidth={3}
        isIntrinsicHeight
        infinite
        dragEnabled={dragEnabled}
        totalSlides={totalSlides}
        hasMasterSpinner
      >
        <CardThumbnail imageList={imageList} />
      </CarouselProvider>
    </Box>
  )
}

CardThumbnailContainer.propTypes = {
  dragEnabled: PropTypes.bool,
  imageList: PropTypes.array
}

export default CardThumbnailContainer
