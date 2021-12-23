import {Paper, Box, IconButton, Divider, Badge} from '@mui/material'
import PropTypes from 'prop-types'
import {useSelector, shallowEqual} from 'react-redux'
import {isEmptyObj} from 'components/shared/util'
import useDeviceView from 'hooks/useDeviceView'
import Link from 'components/shared/Link'
import DesktopMenuBar from './Menu/DesktopMenuBar'
import MobileMenuButton from './Menu/MobileMenuButton'
import UserLayout from './Menu/UserLayout'

const HeaderBar = (props) => {
  const {isDesktopDownView, isDesktopView} = useDeviceView()
  const {handleDarkModeChange, isDarkMode, headerData = {}, showOpenBannerIcon, setShowBanner} = props

  const goToShoppingCart = () => {}
  const handleLogin = () => {}
  const handleLoginOut = () => {}

  const {user} = useSelector(
    (state) => ({
      user: state.shared.user
    }),
    shallowEqual
  )

  const cartCount = '0'
  const logoData = headerData.logo
  const bgImage = `url(${headerData.bgImageUrl})`
  const isEmptyBgImage = isEmptyObj(headerData.bgImageUrl)

  const iconMenus = [
    {
      id: 'menu-show-banner',
      icon: null,
      name: null,
      action: () => {
        setShowBanner(true)
      },
      desktopShow: showOpenBannerIcon,
      mobileShow: false
    }
  ]
  return (
    <Paper
      component='nav'
      square
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 .5rem',
        height: {xs: '3.5rem', md: '6rem'},
        bgcolor: `${isEmptyBgImage && 'header.bg'}`,
        backgroundImage: `${!isEmptyBgImage && bgImage}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      {isDesktopDownView && (
        <Box>
          <MobileMenuButton
            id='mobileMenu'
            handleDarkModeChange={handleDarkModeChange}
            isDarkMode={isDarkMode}
            iconMenusData={iconMenus}
          />
          {showOpenBannerIcon && (
            <IconButton
              data-ref='mobile-open-banner-btn'
              aria-label='banner'
              onClick={() => {
                setShowBanner(true)
              }}
              sx={{padding: ' 0.5rem 0.5rem'}}
            >
              {/* <muiIconList.InfoOutlinedIcon /> */}
            </IconButton>
          )}
        </Box>
      )}

      <Link
        href={logoData?.targetLink}
        data-ref='contract-logo'
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: {xs: 5, md: 0},
          height: {xs: '3.3rem', md: '4.9375rem'},
          minWidth: {xs: '3.2rem', md: '4.5rem'},
          maxWidth: {xs: '10rem', md: '20rem'}
        }}
      >
        <img src={logoData?.path} alt='logo' height='100%' />
      </Link>

      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {isDesktopView && (
          <DesktopMenuBar
            handleDarkModeChange={handleDarkModeChange}
            isDarkMode={isDarkMode}
            iconMenusData={iconMenus}
          />
        )}

        <IconButton
          data-ref='shopping-cart-btn'
          aria-label='shopping cart text'
          onClick={goToShoppingCart}
          sx={{padding: ' 0.5rem 0.5rem'}}
        >
          <Badge badgeContent={cartCount} color='primary'>
            {/* <muiIconList.ShoppingCart /> */}
          </Badge>
        </IconButton>
        {isDesktopView && <Divider orientation='vertical' flexItem />}
        <UserLayout
          user={user}
          isDesktopView={isDesktopView}
          handleLogin={handleLogin}
          handleLoginOut={handleLoginOut}
        />
      </Box>
    </Paper>
  )
}

HeaderBar.propTypes = {
  handleDarkModeChange: PropTypes.func,
  isDarkMode: PropTypes.bool,
  headerData: PropTypes.object,
  showOpenBannerIcon: PropTypes.bool,
  setShowBanner: PropTypes.func
}

export default HeaderBar
