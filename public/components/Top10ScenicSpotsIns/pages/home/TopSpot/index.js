import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import SectionHeader from '../SectionHeader/SectionHeader'
import TopSpotContent from './TopSpotContent'

const TopSpot = ({data}) => (
  <Box>
    <SectionHeader title='Discover top spots' />
    <Box>
      <TopSpotContent data={data} />
    </Box>
  </Box>
)

TopSpot.propTypes = {
  data: PropTypes.array
}

export default TopSpot
