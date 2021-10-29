import * as React from 'react'
import {Grid} from '@mui/material'
import APaper from '../shared/APaper'
import Timer from '../shared/Timer'

const TimerIns = () => {
  const timeLeftInMilliseconds = 15 * 60 * 1000
  const timer = {
    timerEndDate: Date.now() + timeLeftInMilliseconds,
    timeLeftInMilliseconds
  }
  return (
    <APaper>
      <Grid container display='flex' direction='column' alignItems='flex-start'>
        <Grid item sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium', mx: '0.5rem'}}>
          Timer Instance:
        </Grid>
        <Grid item>
          <Timer timer={timer} />
        </Grid>
      </Grid>
    </APaper>
  )
}

export default TimerIns
