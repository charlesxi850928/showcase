import {Box, Button} from '@mui/material'
import PropTypes from 'prop-types'
import {T} from 'i18n'
import ATypography from 'mui/ATypography'
import Link from 'mui/Link'

const wrapperStyle = {
  borderRadius: {xs: '5px 5px 0 0', md: '5px'},
  width: '100%',
  color: 'common.white',
  position: 'relative'
}

const imageOpacityStyle = {
  borderRadius: {xs: '5px 5px 0 0', md: '5px'},
  width: '100%',
  background: {
    md: 'transparent linear-gradient(271deg, #FFFFFF00 0%, #000000DE 100%) 0% 0% no-repeat padding-box;'
  },
  height: '100%',
  position: 'absolute',
  display: {xs: 'none', md: 'block'}
}

const contentStyle = {
  position: {md: 'absolute', xs: 'relative'},
  px: {xs: 2, md: 3},
  bgcolor: {xs: 'common.black', md: 'transparent'},
  color: 'common.white'
}

const Donation = ({data}) => {
  const donationImagePath = `url('${data.image}')`
  const imageWrapperStyle = {
    backgroundImage: donationImagePath,
    width: '100%',
    borderRadius: {xs: '5px 5px 0 0', md: '5px'},
    height: {xs: '11rem', md: '20rem'},
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
  return (
    <Box sx={wrapperStyle}>
      <Link underline='none' href={data?.targetURL} data-ref='donation-content'>
        <Box sx={imageWrapperStyle}>
          <Box sx={imageOpacityStyle} />
        </Box>

        <Box sx={{...contentStyle, pt: {xs: 2.5, md: 0}, bottom: {xs: 0, md: '4.1rem'}, pb: {xs: 1.25, md: 1.75}}}>
          <ATypography variant='h2' component='h2' mb={1}>
            {data.headingText}
          </ATypography>
          <ATypography variant='bodyl0'>{data.subHeadingText}</ATypography>
        </Box>
      </Link>

      <Box sx={{...contentStyle, pb: {xs: 2.5, md: 0}, bottom: {xs: 1, md: '1.6rem'}, borderRadius: '0 0 5px 5px'}}>
        <Button variant='contained' data-ref='donate-btn'>
          <ATypography variant='bodyl0'>
            <T k='Home.donate_now' />
          </ATypography>
        </Button>
      </Box>
    </Box>
  )
}

export default Donation

Donation.propTypes = {
  data: PropTypes.object
}
