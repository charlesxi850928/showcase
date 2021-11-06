import {useState} from 'react'
import {Grid, Typography, Button} from '@mui/material'
import FullScreenDialog from 'components/shared/FullScreenDialog'
import APaper from 'components/shared/APaper'
import './styles.moudle.scss'

const AnimationRadarIns = () => {
  const [openShootingStars, setOpenShootingStars] = useState(true)

  return (
    <APaper>
      <Button onClick={() => setOpenShootingStars(true)}>
        <Typography>Shooting Stars</Typography>
      </Button>
      <FullScreenDialog
        name='shootingstars'
        openDialog={openShootingStars}
        setOpenDialog={setOpenShootingStars}
        paperPropsClassName='shootingstarsbg'
        paperPropsSX={{
          backgroundImage: 'url(assets/images/animation-shooting-stars/bg.jpg)',
          backgroundSize: 'cover',
          '& button': {
            position: 'sticky',
            transform: {xs: 'translateY(50vh)', md: 'translateY(10px)'}
          }
        }}
      >
        <Grid className='stars'>
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
          <Grid component='span' />
        </Grid>
      </FullScreenDialog>
    </APaper>
  )
}

export default AnimationRadarIns
