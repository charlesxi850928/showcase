import TimerIns from 'components/TimerIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper name='TimerIns' comp={<TimerIns />} extraCodePaths={['components/shared/Timer/TimerDisplay.js']} />
)
