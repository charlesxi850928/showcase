import PropTypes from 'prop-types'
import Countdown from 'react-countdown'
import TimerDisplay from './TimerDisplay'

const renderer = ({minutes, seconds}) => <TimerDisplay minSec={minutes * 60 + seconds} />

const onComplete = () => {}

const ShoppingCartTimer = ({timer}) => {
  const {timerEndDate, timeLeftInMilliseconds} = timer
  const isCountDownTimer = timeLeftInMilliseconds >= 0

  return isCountDownTimer ? (
    <Countdown date={timerEndDate} renderer={renderer} onComplete={() => onComplete()} />
  ) : (
    isCountDownTimer && <TimerDisplay />
  )
}

ShoppingCartTimer.propTypes = {
  timer: PropTypes.object
}

export default ShoppingCartTimer
