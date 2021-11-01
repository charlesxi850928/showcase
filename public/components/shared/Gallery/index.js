// @ts-check
import PropTypes from 'prop-types'
import {useState, useEffect, useContext} from 'react'
// @ts-ignore
import {Box, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {ArrowBackIosNew, ArrowForwardIos} from '@mui/icons-material'
import {CarouselContext, CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot} from 'pure-react-carousel'
import DefaultImage from '../DefaultImage'
import 'pure-react-carousel/dist/react-carousel.es.css'

/**
 * @typedef {object} ImageItem
 * @prop {string} url
 * @prop {string} alt
 *
 * @typedef {ImageItem[]} ImageList
 */

/**
 * @typedef {object} GalleryProps
 * @prop {ImageList} imageList
 * @prop {ImageList} thumbnailList
 * @prop {boolean} showThumbnail
 * @prop {boolean} showNavigationButtons
 *
 * @param {GalleryProps} props
 * @returns
 */
function Gallery(props) {
  const {imageList, thumbnailList, showThumbnail, showNavigationButtons} = props
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)
  const [totalSlides, setTotalSlides] = useState(carouselContext.state.totalSlides)
  const shouldShowNavigationButtons = showNavigationButtons && totalSlides > 1

  useEffect(() => {
    function onCarouselContextChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
      setTotalSlides(carouselContext.state.totalSlides)
    }

    carouselContext.subscribe(onCarouselContextChange)
    return () => carouselContext.unsubscribe(onCarouselContextChange)
  }, [carouselContext])

  return (
    <>
      <Box
        className='sliderContainer'
        sx={{
          position: 'relative',
          '& .backButton, .nextButton': {
            position: 'absolute',
            top: '50%',
            height: '3rem',
            width: '3rem',
            padding: 'unset',
            transform: 'translateY(-50%)',
            backgroundColor: 'transparent',
            border: 'unset',
            color: 'common.white',
            opacity: {xs: '0.5', md: '1'}
          },
          '& .backButton': {
            left: {xs: '-0.3rem', md: '-3.9rem'}
          },
          '& .nextButton': {
            right: {xs: '-0.3rem', md: '-3.9rem'}
          },
          '& img': {
            objectFit: 'contain',
            outline: (theme) => ({
              xs: 'unset',
              md: `2px solid ${theme.palette.common.black}`
            }),
            outlineOffset: '-2px'
          }
        }}
      >
        <Slider role='none' trayProps={{role: 'listbox', 'aria-label': 'image wrapper'}} tabIndex={-1}>
          {imageList.map((image, index) => (
            <Slide key={image.url} index={index} tabIndex={-1}>
              <Image hasMasterSpinner={false} src={image.url} alt={image.alt} />
            </Slide>
          ))}
        </Slider>
        {shouldShowNavigationButtons && (
          <>
            <ButtonBack className='backButton' aria-label='back button'>
              <ArrowBackIosNew sx={{fontSize: {xs: '2.5rem', md: '3.15rem'}}} />
            </ButtonBack>
            <ButtonNext className='nextButton' aria-label='next button'>
              <ArrowForwardIos sx={{fontSize: {xs: '2.5rem', md: '3.15rem'}}} />
            </ButtonNext>
          </>
        )}
      </Box>
      <Box
        className='description'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.5rem 0',
          backgroundColor: (theme) => alpha(theme.palette.common.black, 0.8),
          color: 'common.white'
        }}
      >
        <Typography
          component='span'
          sx={{
            paddingRight: '0.5rem',
            fontSize: {md: '1rem', xs: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}
          }}
        >
          {imageList[currentSlide]?.alt}
        </Typography>
        <Typography component='span' sx={{flexShrink: 0, fontSize: {md: '1rem', xs: '0.875rem'}}}>
          {`${currentSlide} of ${totalSlides}`}
        </Typography>
      </Box>
      {showThumbnail && (
        <Box
          className='thumbnail'
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4%',
            '& .carousel__dot': {
              '&.carousel__dot--selected': {
                filter: 'unset'
              },
              padding: 'unset',
              border: 'unset',
              transition: 'filter 0.8s',
              filter: 'brightness(50%)',
              width: totalSlides < 6 ? `${100 / 6}%` : `${100 / totalSlides}%`
            }
          }}
        >
          {thumbnailList?.map((image, index) => (
            <Dot key={image.url} slide={index} disabled={false}>
              <Image hasMasterSpinner={false} src={image.url} key={image.url} />
            </Dot>
          ))}
        </Box>
      )}
    </>
  )
}

Gallery.propTypes = {
  imageList: PropTypes.array,
  thumbnailList: PropTypes.array,
  showThumbnail: PropTypes.bool,
  showNavigationButtons: PropTypes.bool
}

/**
 * @param {{imageList: ImageList, thumbnailList: ImageList, showThumbnail: boolean, showNavigationButtons: boolean, dragEnabled: boolean}} props
 */
function GalleryContainer(props) {
  const {imageList, thumbnailList, showThumbnail = true, showNavigationButtons = true, dragEnabled = false} = props

  const totalSlides = imageList.length

  if (totalSlides === 0) {
    return <DefaultImage />
  }

  return (
    <Box className='gallery'>
      <CarouselProvider
        naturalSlideHeight={2}
        naturalSlideWidth={3}
        infinite
        totalSlides={totalSlides}
        dragEnabled={dragEnabled}
      >
        <Gallery
          imageList={imageList}
          thumbnailList={thumbnailList}
          showThumbnail={showThumbnail}
          showNavigationButtons={showNavigationButtons}
        />
      </CarouselProvider>
    </Box>
  )
}

GalleryContainer.propTypes = {
  dragEnabled: PropTypes.bool,
  imageList: PropTypes.array,
  showNavigationButtons: PropTypes.bool,
  showThumbnail: PropTypes.bool,
  thumbnailList: PropTypes.array
}

export default GalleryContainer
