import ScrollCardIns from 'components/ScrollCardIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='ScrollCardIns'
    comp={<ScrollCardIns />}
    extraCodePaths={[
      'components/shared/ScrollCard/Draggable.js',
      'components/shared/ScrollCard/ScrollWrapper.js',
      'components/shared/ScrollCard/Draggable.module.scss'
    ]}
  />
)
