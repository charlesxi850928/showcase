import PropTypes from 'prop-types'
import SectionHeader from '../SectionHeader/SectionHeader'
import ConnectionContent from './ConnectionContent'

const Connection = ({data}) => (
  <>
    <SectionHeader title='Connect with us' />
    <ConnectionContent data={data} />
  </>
)

Connection.propTypes = {
  data: PropTypes.array
}

export default Connection
