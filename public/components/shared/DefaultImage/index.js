import {Box} from '@mui/material'

const defaultImageUrl = 'assets/images/common/default-image.png'

function DefaultImage() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      }}
    >
      <img src={defaultImageUrl} alt='not available' />
    </Box>
  )
}

export default DefaultImage
