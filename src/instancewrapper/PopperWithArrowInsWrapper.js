import PopperWithArrowIns from 'components/PopperWithArrowIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='PopperWithArrowIns'
    comp={<PopperWithArrowIns />}
    extraCodePaths={['components/shared/PopperWithArrow/Popper.js']}
  />
)
