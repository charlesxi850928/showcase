import {Paper, Box, IconButton, Divider, Badge} from '@mui/material'
import PropTypes from 'prop-types'
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import {isEmptyObj} from 'utils/GeneralUtils'
import {useRouter} from 'next/router'
import {useT} from 'i18n'
import {loadShoppingCartStatus} from 'services/cartServices'
import sharedSelectors from 'redux/selectors/shared'
import {logout} from 'services/loginServices'
import Link from 'mui/Link'
import muiIconList from 'mui/IconList'
import {RoutePath} from 'ShowCase/routes'
import useDeviceView from 'hooks/useDeviceView'
import DesktopMenuBar from './Menu/DesktopMenuBar'
import MobileMenuButton from './Menu/MobileMenuButton'
import UserLayout from './Menu/UserLayout'
import ShoppingCartTimer from './ShoppingCartTimer'
import SwitchLanguage from './Menu/MenuSubItems/SwitchLanguage'

const HeaderBar = (props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {isDesktopDownView, isDesktopView} = useDeviceView()
  const {handleDarkModeChange, isDarkMode, headerData = {}, showOpenBannerIcon, setShowBanner} = props

  const goToShoppingCart = () => {
    dispatch(loadShoppingCartStatus())
    router.push(RoutePath.ShoppingCart)
  }
  const handleLogin = () => {
    router.push(RoutePath.Login)
  }
  const handleLoginOut = () => {
    dispatch(logout()).then(() => {
      window.location.href = RoutePath.Home
    })
  }

  const {user} = useSelector(
    (state) => ({
      user: state.shared.user
    }),
    shallowEqual
  )

  const cartCount = useSelector(sharedSelectors.getCartCount)
  const shoppingCartTimer = useSelector(sharedSelectors.getShoppingCartTimer)

  const logoData = headerData.logo
  const bgImage = `url(${headerData.bgImageUrl})`
  const isEmptyBgImage = isEmptyObj(headerData.bgImageUrl)

  const shoppingCartText = useT({k: 'Common.headerBar.shopping_cart', variables: {count: cartCount}})
  const logoAltText = useT({k: 'Common.headerBar.header_logo'})

  const languageText = useT({k: 'Common.headerBar.language'})
  const helpText = useT({k: 'Common.headerBar.help'})
  const openBanner = useT({k: 'Common.bannerAlert.open_banner'})

  const iconMenus = [
    {
      id: 'menu-show-banner',
      icon: <muiIconList.InfoOutlinedIcon />,
      name: openBanner,
      action: () => {
        setShowBanner(true)
      },
      desktopShow: showOpenBannerIcon,
      mobileShow: false
    },
    {
      id: 'menu-language-btn',
      icon: <muiIconList.Language />,
      name: languageText,
      subItems: SwitchLanguage(),
      desktopShow: true,
      mobileShow: true
    },
    {
      id: 'menu-help-btn',
      icon: <muiIconList.HelpOutline />,
      name: helpText,
      action: () => {},
      desktopShow: true,
      mobileShow: true
    }
    // {
    //   id: 'menu-switch-mode-btn',
    //   icon: isDarkMode ? <muiIconList.Brightness7 /> : <muiIconList.Brightness4 />,
    //   name: switchModeText,
    //   link: RoutePath.Home,
    //   action: handleDarkModeChange
    // }
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
              aria-label={openBanner}
              onClick={() => {
                setShowBanner(true)
              }}
              sx={{padding: ' 0.5rem 0.5rem'}}
            >
              <muiIconList.InfoOutlinedIcon />
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
        <img src={logoData?.path} alt={logoAltText} height='100%' />
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
          aria-label={shoppingCartText}
          onClick={goToShoppingCart}
          sx={{padding: ' 0.5rem 0.5rem'}}
        >
          <Badge badgeContent={cartCount} color='primary'>
            <muiIconList.ShoppingCart />
          </Badge>
        </IconButton>
        {shoppingCartTimer && <ShoppingCartTimer timer={shoppingCartTimer} />}
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
