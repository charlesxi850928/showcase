import PropTypes from 'prop-types'
import {AppBar, Paper} from '@mui/material'
import {visuallyHidden} from '@mui/utils'
import {useTheme} from '@mui/material/styles'
import useDarkMode from 'use-dark-mode'
import {useRouter} from 'next/router'
import Head from 'next/head'
import ATypography from 'mui/ATypography'
import en from 'i18n/en'
import {useState, useEffect} from 'react'
import {RoutePath} from '../../../routes'
import styles from '../Layout.module.scss'
import HeaderBar from './HeaderBar'
import NoticeBar from './NoticeBar'

function findKey(obj, value, compare = (a, b) => a === b) {
  return Object.keys(obj).find((k) => compare(obj[k], value))
}

const Header = ({brand, headerData, bannerData = {}}) => {
  const {mode} = useTheme().palette
  const router = useRouter()
  const isDarkMode = mode === 'dark'

  const {toggle: toggleDarkMode} = useDarkMode()
  const pageTitleKey = findKey(RoutePath, router.pathname) || 'Home'
  // const title = useT({k: `Common.page_title.${pageTitleKey}`}) || 'Campgrounds and Camping Reservations'
  const title = en.Common.page_title[pageTitleKey] || 'Campgrounds and Camping Reservations'
  const pageTitle = `${title} - ${brand?.brand}`
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
        <title>{pageTitle}</title>
      </Head>
      <AppBar enableColorOnDark className={styles.header} position='static' color='default'>
        <ATypography
          sx={visuallyHidden}
          id='sr-only-page-title'
          variant='h1'
          component='h1'
          // aria-live='polite'
          // aria-atomic='true'
          // role='status'
        >
          {pageTitle}
        </ATypography>
        {allowedBanner && showBanner && <NoticeBar alertData={bannerData} setShowBanner={toggleShowBanner} />}

        <HeaderBar
          showOpenBannerIcon={allowedBanner && !showBanner}
          setShowBanner={toggleShowBanner}
          handleDarkModeChange={toggleDarkMode}
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
  brand: PropTypes.object,
  headerData: PropTypes.object,
  bannerData: PropTypes.object
}

export default Header
