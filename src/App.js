import {Grid, Box} from '@mui/material'
import PropTypes from 'prop-types'

const App = ({header, main, footer}) => (
  <Box>
    {header}
    <Grid role='main' aria-label='main info' sx={{paddingBottom: '2rem'}}>
      {main}
    </Grid>
    {footer}
  </Box>
)

App.propTypes = {
  header: PropTypes.node,
  main: PropTypes.node,
  footer: PropTypes.node
}

export default App
