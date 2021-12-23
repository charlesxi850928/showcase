import PropTypes from 'prop-types'
import {AppBar, Paper, Typography} from '@mui/material'
import {visuallyHidden} from '@mui/utils'
import {useTheme} from '@mui/material/styles'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import styles from '../Layout.module.scss'
import HeaderBar from './HeaderBar'

const Header = ({headerData, bannerData = {}}) => {
  const {mode} = useTheme().palette
  const isDarkMode = mode === 'dark'

  const allowedBanner = bannerData?.show
  const [showBanner, setShowBanner] = useState(allowedBanner)

  useEffect(() => {
    const sessionBannerStatus = sessionStorage.getItem('showBanner')
    if (sessionBannerStatus === null) {
      sessionStorage.setItem('showBanner', allowedBanner)
      setShowBanner(allowedBanner)
    } else {
      setShowBanner(JSON.parse(sessionStorage.getItem('showBanner')))
    }
  }, [allowedBanner])

  const toggleShowBanner = (status) => {
    sessionStorage.setItem('showBanner', status)
    setShowBanner(status)
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppBar enableColorOnDark className={styles.header} position='static' color='default'>
        <Typography
          sx={visuallyHidden}
          id='sr-only-page-title'
          variant='h1'
          component='h1'
          // aria-live='polite'
          // aria-atomic='true'
          // role='status'
        >
          Home
        </Typography>

        <HeaderBar
          showOpenBannerIcon={allowedBanner && !showBanner}
          setShowBanner={toggleShowBanner}
          // handleDarkModeChange={toggleDarkMode}
          headerData={headerData}
          isDarkMode={isDarkMode}
        />
      </AppBar>
      <Paper
        data-ref='header-nav-portal'
        id='header-nav-portal'
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          borderRadius: 0,
          backgroundColor: 'common.white',
          boxShadow: '0 5px 10px rgb(0 0 0 / 15%)',
          width: '100% ',
          zIndex: 2,
          marginTop: 0
        }}
      />
    </>
  )
}

Header.propTypes = {
  headerData: PropTypes.object,
  bannerData: PropTypes.object
}

export default Header
