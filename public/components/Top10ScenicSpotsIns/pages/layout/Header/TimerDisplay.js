import PropTypes from 'prop-types'
import {Grid} from '@mui/material'
import {covertSeconds2MinSecs, covertSeconds2MinSecsWithUnit} from 'utils/GeneralUtils'
import {useT} from 'i18n'
import ATypography from 'mui/ATypography'
import muiIconList from '../../../mui/IconList'

const TimerDisplay = ({minSec = 0}) => {
  const minSecsWithUnit = covertSeconds2MinSecsWithUnit(minSec)
  const {mins, secs} = minSecsWithUnit
  const shoppingCartTimerText = useT({k: 'Common.headerBar.shopping_cart_timer', variables: {mins, secs}})
  return (
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
      aria-label={shoppingCartTimerText}
    >
      <muiIconList.HourglassDisabledIcon sx={{fontSize: '1rem'}} />
      <ATypography component='span' variant='body2' aria-hidden>
        {covertSeconds2MinSecs(minSec)}
      </ATypography>
    </Grid>
  )
}

TimerDisplay.propTypes = {
  minSec: PropTypes.number
}

export default TimerDisplay
