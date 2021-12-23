import {Divider, Box, Paper} from '@mui/material'
import PropTypes from 'prop-types'
import ATypography from 'mui/ATypography'
import {visuallyHidden} from '@mui/utils'
import {T} from 'i18n'
import useDeviceView from 'hooks/useDeviceView'
import Links from './Links/Links'
import Contact from './Contact/Contact'
import SocialMedia from './SocialMedia/SocialMedia'
import styles from './Footer.module.scss'
import PaymentIcon from './PaymentIcon/PaymentIcon'
import {MainContainer} from '../../shared/MainContainer'

const Footer = ({footerData}) => {
  const {isDesktopView, isDesktopDownView} = useDeviceView()

  return (
    <Box sx={{bgcolor: 'footer.bg'}} component='footer' role='contentinfo' data-ref='footer'>
      <MainContainer sx={{padding: {xs: '1rem', md: '1rem 8rem'}}} className={styles.footer}>
        <ATypography sx={visuallyHidden} variant='h2' component='h2'>
          <T k='Common.footer.footer_heading_title' />
        </ATypography>
        <Links footerData={footerData} />
        {isDesktopDownView && <PaymentIcon data={footerData.payments} />}
        <Divider />
        {footerData?.contacts && (
          <>
            <Contact contactData={footerData.contacts} />
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
          <SocialMedia />
          {isDesktopView && <PaymentIcon data={footerData.payments} />}
          <ATypography variant='body2'>{footerData?.copyRight}</ATypography>
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
}

Footer.propTypes = {
  footerData: PropTypes.object
}

export default Footer
