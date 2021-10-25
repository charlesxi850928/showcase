import "./App.css"
import { Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
import { Grid, Box } from "@mui/material"
import routes from "./routes"
import Header from "./Header"

function App() {
  return (
    <Box>
      <Header />
      <Grid>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
        {routes.map((r, index) => {
          return <Route key={index} path={r.path} component={r.component} />
        })}
      </Grid>
    </Box>
  )
}

export default App
