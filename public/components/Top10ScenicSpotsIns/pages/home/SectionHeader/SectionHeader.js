import PropTypes from 'prop-types'
import ATypography from '../../../mui/ATypography'

const SectionHeader = ({title, dataRef = 'section-header'}) => (
  <ATypography variant='h1' component='h2' sx={{mb: 2.5}} dataRef={dataRef}>
    {title}
  </ATypography>
)

SectionHeader.propTypes = {
  title: PropTypes.string,
  dataRef: PropTypes.string
}

export default SectionHeader
