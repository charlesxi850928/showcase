import {useState} from 'react'
import {Grid, Button, Typography} from '@mui/material'
import APaper from 'components/shared/APaper'
import FullScreenDialog from 'components/shared/FullScreenDialog'
import ClockOne from 'components/shared/ClockOne'
import ClockTwo from 'components/shared/ClockTwo'
import useDeviceView from 'hooks/useDeviceView'
import ClockThree from 'components/shared/ClockThree'

const ClockIns = () => {
  const [openClockOne, setOpenClockOne] = useState(true)
  const [openClockTwo, setOpenClockTwo] = useState(false)
  const [openClockThree, setOpenClockThree] = useState(false)
  const {isDesktopDownView} = useDeviceView()
  return (
    <APaper>
      <Grid>
        <Button onClick={() => setOpenClockOne(true)}>
          <Typography>Clock One</Typography>
        </Button>
        <Button onClick={() => setOpenClockTwo(true)}>
          <Typography>Clock Two</Typography>
        </Button>
        <Button onClick={() => setOpenClockThree(true)}>
          <Typography>Clock Three</Typography>
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
          '& .box': isDesktopDownView
            ? {
                width: '325px !important',
                height: '325px !important'
              }
            : {}
        }}
        paperPropsClassName='clock-one'
      >
        <ClockOne />
      </FullScreenDialog>
      <FullScreenDialog
        name='clock-two'
        openDialog={openClockTwo}
        setOpenDialog={setOpenClockTwo}
        paperPropsSX={{
          '& button': {
            'z-index': 1
          },
          '& .box .container': isDesktopDownView
            ? {
                width: '285px !important',
                height: '285px !important',
                '& .clock .time': {
                  'font-size': '48px !important'
                }
              }
            : {}
        }}
        paperPropsClassName='clock-two'
      >
        <ClockTwo />
      </FullScreenDialog>
      <FullScreenDialog
        name='clock-three'
        openDialog={openClockThree}
        setOpenDialog={setOpenClockThree}
        paperPropsSX={{
          '& button': {
            'z-index': 1
          },
          '& .box .clock': isDesktopDownView
            ? {
                width: '275px !important',
                height: '275px !important'
              }
            : {}
        }}
        paperPropsClassName='clock-three'
      >
        <ClockThree />
      </FullScreenDialog>
    </APaper>
  )
}
export default ClockIns
