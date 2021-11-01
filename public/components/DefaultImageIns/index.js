import {Grid} from '@mui/material'
import DefaultImage from 'components/shared/DefaultImage'
import APaper from 'components/shared/APaper'

const DefaultImageIns = () => (
  <APaper>
    <Grid item xs={12} md={3}>
      <DefaultImage />
    </Grid>
  </APaper>
)

export default DefaultImageIns
