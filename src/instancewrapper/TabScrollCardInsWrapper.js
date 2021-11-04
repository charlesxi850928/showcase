import TabScrollCardIns from 'components/TabScrollCardIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='TabScrollCardIns'
    comp={<TabScrollCardIns />}
    extraCodePaths={[
      'components/shared/ACard',
      'components/shared/ScrollCard/Draggable.js',
      'components/shared/ScrollCard/ScrollWrapper.js',
      'components/shared/ScrollCard/Draggable.module.scss'
    ]}
  />
)
