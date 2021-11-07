import {useState} from 'react'
import {Grid, Typography, Button} from '@mui/material'
import FullScreenDialog from 'components/shared/FullScreenDialog'
import APaper from 'components/shared/APaper'
import './styles.moudle.scss'
import useDeviceView from 'hooks/useDeviceView'

const AnimationRadarIns = () => {
  const [openRadar, setOpenRadar] = useState(true)
  const {isDesktopDownView} = useDeviceView()
  return (
    <APaper>
      <Button onClick={() => setOpenRadar(true)}>
        <Typography>Open Radar</Typography>:
      </Button>
      <FullScreenDialog
        name='radar'
        openDialog={openRadar}
        setOpenDialog={setOpenRadar}
        paperPropsSX={{
          backgroundImage: 'url(assets/images/animation-radar/bg.jpg)',
          backgroundSize: 'cover',
          '& .radar': isDesktopDownView
            ? {
                width: '325px',
                height: '325px'
              }
            : {}
        }}
      >
        <Grid className='radar' component='ul' sx={{background: '#000000 url(assets/images/animation-radar/map.png)'}}>
          <Grid component='li' />
          <Grid component='li' />
          <Grid component='li' />
          <Grid component='li' />
          <Grid component='li' />
          <Grid component='li' />
          <Grid component='li' />
          <Grid component='li' />
        </Grid>
      </FullScreenDialog>
    </APaper>
  )
}

export default AnimationRadarIns
