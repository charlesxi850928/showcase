import {Grid} from '@mui/material'
import PropTypes from 'prop-types'
import TopSpotItem from './TopSpotItem'

const TopSpotContent = ({data}) => (
  <Grid container spacing={2}>
    {data.map((topSpot) => (
      <Grid item lg={3} sm={6} xs={12} key={topSpot.id}>
        <TopSpotItem spotDetails={topSpot} />
      </Grid>
    ))}
  </Grid>
)

TopSpotContent.propTypes = {
  data: PropTypes.array
}

export default TopSpotContent
