import {Box, Link} from '@mui/material'

const Footer = () => (
  <Box
    sx={{
      width: '100%',
      position: 'fixed',
      display: 'flex',
      zIndex: 999,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      left: 0,
      padding: '0.5rem',
      overflow: 'hidden',
      zoom: 1,
      margin: 0,
      background: 'white',
      boxShadow:
        '-10px -10px 20px rgb(255 255 255 / 30%), 10px 10px 20px rgb(0 0 0 / 30%), 0px 40px 50px rgb(0 0 0 / 30%);'
    }}
  >
    <Link target='_blank' href='https://beian.miit.gov.cn'>
      陕ICP备2021014143号
    </Link>
  </Box>
)

export default Footer
