import {Suspense} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Grid, Box} from '@mui/material'
import Home from './components/Home'
import routes from './routes'
import Header from './Header'
import ABackdrop from './components/shared/ABackdrop'

const App = () => (
  <Box>
    <Header />
    <Grid role='main' aria-label='main info'>
      <Suspense fallback={<ABackdrop />}>
        <Route exact path='/' component={Home} />
        {routes.map((r) => (
          <Route key={r.name} path={r.path} component={r.component} />
        ))}
      </Suspense>
    </Grid>
  </Box>
)

export default App
