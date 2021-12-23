import PropTypes from 'prop-types'
import {Box, Button} from '@mui/material'
import ATypography from 'mui/ATypography'
import useDeviceView from 'hooks/useDeviceView'
import Link from 'mui/Link'
import SearchForm from '../../searchForm'

const HeroContent = ({heroData}) => {
  const {isDesktopView} = useDeviceView()
  const heroPath = `url(${heroData.bgImage})`

  return (
    <Box
      data-ref='hero-image-content'
      sx={{
        position: 'relative',
        backgroundImage: heroPath,
        height: {xs: '15.8125rem', md: '60vh'},
        minHeight: {md: '18rem'},
        maxHeight: {md: '40rem'},
        display: {xs: 'block', md: 'flex'},
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      <Box sx={{zIndex: '2', position: 'absolute', width: '100%'}}>
        {isDesktopView && (
          <ATypography variant='d5' component='h2' color='common.white' mb={1}>
            {heroData.headTitle}
          </ATypography>
        )}

        <SearchForm dataRef='home-page-search-form' />
        <ATypography variant='subtitle3' component='p' sx={{mt: {xs: 10, md: 0}}} w6 color='common.white'>
          {heroData.subHeadTitle}
        </ATypography>
        <Button
          variant='contained'
          data-ref='explore-all-parks-btn'
          LinkComponent={Link}
          href={heroData.ctaLink}
          sx={{mt: 1}}
        >
          <ATypography variant='bodyl0'>{heroData.ctaText}</ATypography>
        </Button>
      </Box>
    </Box>
  )
}

HeroContent.propTypes = {
  heroData: PropTypes.object
}

export default HeroContent
