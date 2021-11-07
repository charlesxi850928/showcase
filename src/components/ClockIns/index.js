import {useState} from 'react'
import {Grid, Button, Typography} from '@mui/material'
import APaper from 'components/shared/APaper'
import FullScreenDialog from 'components/shared/FullScreenDialog'
import ClockOne from 'components/shared/ClockOne'
import useDeviceView from 'hooks/useDeviceView'

const ClockIns = () => {
  const [openClockOne, setOpenClockOne] = useState(true)
  const {isDesktopDownView} = useDeviceView()
  const mobileAdjustment = isDesktopDownView
    ? {
        width: '375px',
        height: '375px'
      }
    : {}
  return (
    <APaper>
      <Grid>
        <Button onClick={() => setOpenClockOne(true)}>
          <Typography>Clock One</Typography>
        </Button>
      </Grid>
      <FullScreenDialog
        name='clock-one'
        openDialog={openClockOne}
        setOpenDialog={setOpenClockOne}
        paperPropsSX={{
          '& button': {
            'z-index': 1
          },
          '& .box': mobileAdjustment
        }}
      >
        <ClockOne />
      </FullScreenDialog>
    </APaper>
  )
}
export default ClockIns
