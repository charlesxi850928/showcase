import PropTypes from 'prop-types'
import Countdown from 'react-countdown'
import {useDispatch, useStore} from 'react-redux'
import {loadShoppingCartTimer, getCartData} from 'services/cartServices'
import {TIMER_STATUS_NO_TIMER, TIMER_STATUS_OK, TIMER_STATUS_ALMOST_TIMEOUT} from 'services/Constants'
import {isEmptyObj} from 'utils/GeneralUtils'
import {useRouter} from 'next/router'
import {RoutePath} from 'ShowCase/routes'
import TimerDisplay from './TimerDisplay'

const renderer = ({minutes, seconds}) => <TimerDisplay minSec={minutes * 60 + seconds} />

const onComplete = (store, router, dispatch) => {
  // 1. Release Inventory when really timeout expired
  // 2. Refresh countdown timer if timer been update by other browser tabs
  dispatch(loadShoppingCartTimer())
  // 3. Refresh Shopping Cart
  const {pathname} = router
  if (RoutePath.ShoppingCart === pathname) {
    getCartData(store)
  }
}

const ShoppingCartTimer = ({timer}) => {
  const {status, timerEndDate, timeLeftInMilisec} = timer
  const isCountDownTimer = status === TIMER_STATUS_OK || status === TIMER_STATUS_ALMOST_TIMEOUT
  const dispatch = useDispatch()
  const store = useStore()
  const router = useRouter()

  return !isEmptyObj(status) && status !== TIMER_STATUS_NO_TIMER && timeLeftInMilisec <= 0 ? (
    <TimerDisplay />
  ) : (
    isCountDownTimer && (
      <Countdown date={timerEndDate} renderer={renderer} onComplete={() => onComplete(store, router, dispatch)} />
    )
  )
}

ShoppingCartTimer.propTypes = {
  timer: PropTypes.object
}

export default ShoppingCartTimer
