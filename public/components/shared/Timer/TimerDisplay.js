import PropTypes from 'prop-types'
import {Grid, Typography} from '@mui/material'
import {HourglassEmpty} from '@mui/icons-material'
import {covertSeconds2MinSecs} from '../util'

const TimerDisplay = ({minSec = 0}) => (
  <Grid
    data-ref='shopping_cart_timer'
    tabIndex={0}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'error.contrastText',
      backgroundColor: 'error.main',
      py: '0.125rem',
      pr: '0.25rem',
      mx: '0.5rem',
      borderRadius: '0.125rem'
    }}
    role='region'
  >
    <HourglassEmpty sx={{fontSize: '1rem'}} />
    <Typography component='span' variant='body2' aria-hidden>
      {covertSeconds2MinSecs(minSec)}
    </Typography>
  </Grid>
)

TimerDisplay.propTypes = {
  minSec: PropTypes.number
}

export default TimerDisplay
