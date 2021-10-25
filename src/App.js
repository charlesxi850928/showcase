import './App.css'
import {Route, Redirect} from 'react-router-dom'
import {Grid, Box} from '@mui/material'
import Home from './components/Home'
import routes from './routes'
import Header from './Header'

const App = () => (
  <Box>
    <Header />
    <Grid>
      <Route path='/home' component={Home} />
      <Redirect to='/home' />
      {routes.map((r) => (
        <Route key={r.name} path={r.path} component={r.component} />
      ))}
    </Grid>
  </Box>
)

export default App
