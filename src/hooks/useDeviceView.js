import {useMediaQuery} from '@mui/material'
import {useTheme} from '@mui/material/styles'

/**
 * Get current view device type
 *
 * Note: just used for UI, cannot be used to determine the current device type
 */
const useDeviceView = () => {
  const theme = useTheme()
  const {breakpoints} = theme
  const {sm, md} = breakpoints.values

  const isDesktopView = useMediaQuery(breakpoints.up(md))
  const isDesktopDownView = useMediaQuery(breakpoints.down(md))
  const isMobileView = useMediaQuery(breakpoints.down(sm))
  const isMobileUpView = useMediaQuery(breakpoints.up(sm))

  const isTabletView = !isDesktopView && !isMobileView

  return {
    isDesktopView,
    isDesktopDownView,
    isMobileView,
    isMobileUpView,
    isTabletView
  }
}

export default useDeviceView
