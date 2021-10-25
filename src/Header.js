import logo from "./logo.svg"
import "./App.css"
import { useHistory } from "react-router-dom"
import { Avatar, Grid, Paper } from "@mui/material"
import { deepPurple, blue } from "@mui/material/colors"
const HomeLink = () => {
  const history = useHistory()
  const back = () => {
    history.goBack()
  }
  const forward = () => {
    history.goForward()
  }
  return (
    <Grid display="flex" alignItems="center">
      <a className="App-link" href="/home">
        <img src={logo} style={{ width: 100 }} alt="logo" />
      </a>
      <Avatar
        onClick={back}
        alt="Back"
        sx={{
          bgcolor: deepPurple[500],
          width: 52,
          height: 52,
          cursor: "pointer",
          marginRight: 2.5,
        }}
      >
        B
      </Avatar>
      <Avatar
        onClick={forward}
        sx={{
          bgcolor: blue[500],
          width: 52,
          height: 52,
          cursor: "pointer",
        }}
      >
        P
      </Avatar>
    </Grid>
  )
}
HomeLink.propTypes = {}
const Header = () => {
  return (
    <Paper>
      <HomeLink />
    </Paper>
  )
}
Header.propTypes = {}

export default Header
