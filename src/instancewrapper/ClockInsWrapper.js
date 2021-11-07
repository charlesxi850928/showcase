import ClockIns from 'components/ClockIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='ClockIns'
    comp={<ClockIns />}
    extraCodePaths={[
      'components/shared/ClockOne/styles.moudle.scss',
      'components/shared/ClockTwo/styles.moudle.scss',
      'components/shared/ClockThree/styles.moudle.scss'
    ]}
  />
)
