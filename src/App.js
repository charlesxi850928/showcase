import {Suspense} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Grid, Box} from '@mui/material'
import Home from './components/Home'
import routes from './routes'
import Header from './Header'
import ABackdrop from './components/shared/ABackdrop'
import Footer from './Footer'

const App = () => (
  <Box>
    <Header />
    <Grid role='main' aria-label='main info'>
      <Suspense fallback={<ABackdrop />}>
        <Route exact path='/' component={Home} />
        {routes.map((r) => r.component && <Route key={r.name} path={r.path} component={r.component} />)}
      </Suspense>
    </Grid>
    <Footer />
  </Box>
)

export default App
