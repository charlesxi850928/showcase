import CardHoverIns from 'components/CardHoverIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='CardHoverIns'
    comp={<CardHoverIns />}
    extraCodePaths={['components/CardHoverIns/styles.scss']}
  />
)
