import {Divider, Box, Paper, Typography} from '@mui/material'
import PropTypes from 'prop-types'
import {visuallyHidden} from '@mui/utils'
import {MainContainer} from 'components/shared/MainContainer'

const Footer = ({footerData}) => (
  <Box sx={{bgcolor: 'footer.bg'}} component='footer' role='contentinfo' data-ref='footer'>
    <MainContainer sx={{padding: {xs: '1rem', md: '1rem 8rem'}}}>
      <Typography sx={visuallyHidden} variant='h2' component='h2'>
        Heand Title
      </Typography>
      <Divider />
      {footerData?.contacts && (
        <>
          <Divider />
        </>
      )}

      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          flexDirection: {xs: 'column', md: 'row'}
        }}
        component='section'
      >
        <Typography variant='body2'>{footerData?.copyRight}</Typography>
      </Box>
    </MainContainer>
    <Paper
      data-ref='bottom-nav-portal'
      id='bottom-nav-portal'
      sx={{
        position: 'fixed',
        zIndex: 2,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 0,
        // workaround bottom gap issue
        paddingBottom: '0.25rem',
        marginBottom: '-0.25rem',
        boxShadow: '0px 0px 10px rgb(0 0 0 / 15%)'
      }}
    />
  </Box>
)

Footer.propTypes = {
  footerData: PropTypes.object
}

export default Footer
