import {deepPurple, blue} from '@mui/material/colors'
import {visuallyHidden} from '@mui/utils'
import './App.css'
import {useHistory} from 'react-router-dom'
import {Avatar, Grid, Paper, Typography} from '@mui/material'
import logo from './logo.svg'

const HomeLink = () => {
  const history = useHistory()
  const back = () => {
    history.goBack()
  }
  const forward = () => {
    history.goForward()
  }
  return (
    <Grid display='flex' alignItems='center' role='region' aria-label='header info'>
      <Typography sx={visuallyHidden} id='sr-only-page-title' variant='h1' component='h1' aria-live='polite'>
        Show Case
      </Typography>
      <a className='App-link' href='/'>
        <img src={logo} style={{width: 100}} alt='logo' />
      </a>
      <Avatar
        onClick={back}
        alt='Back to previous page'
        sx={{
          bgcolor: deepPurple[600],
          width: 52,
          height: 52,
          cursor: 'pointer',
          marginRight: 2.5
        }}
      >
        BK
      </Avatar>
      <Avatar
        onClick={forward}
        sx={{
          bgcolor: blue[900],
          width: 52,
          height: 52,
          cursor: 'pointer'
        }}
      >
        PV
      </Avatar>
    </Grid>
  )
}
HomeLink.propTypes = {}
const Header = () => (
  <Paper>
    <HomeLink />
  </Paper>
)
Header.propTypes = {}

export default Header
