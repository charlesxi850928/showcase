import ClockIns from 'components/ClockIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='ClockIns'
    comp={<ClockIns />}
    extraCodePaths={[
      'components/shared/ClockOne/styles.scss',
      'components/shared/ClockTwo/styles.scss',
      'components/shared/ClockThree/styles.scss'
    ]}
  />
)
