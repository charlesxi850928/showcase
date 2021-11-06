import AnimationShootingStarsIns from 'components/AnimationShootingStarsIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='AnimationShootingStarsIns'
    comp={<AnimationShootingStarsIns />}
    extraCodePaths={['components/AnimationShootingStarsIns/styles.moudle.scss']}
  />
)
