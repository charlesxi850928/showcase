import AnimationRadarIns from 'components/AnimationRadarIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='AnimationRadarIns'
    comp={<AnimationRadarIns />}
    extraCodePaths={['components/AnimationRadarIns/styles.scss']}
  />
)
