import {Grid} from '@mui/material'
import DefaultImage from '../shared/DefaultImage'
import APaper from '../shared/APaper'

const DefaultImageIns = () => (
  <APaper>
    <Grid item xs={12} md={3}>
      <DefaultImage />
    </Grid>
  </APaper>
)

export default DefaultImageIns
