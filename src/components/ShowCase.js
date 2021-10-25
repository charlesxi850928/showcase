import React from "react"
import { Paper, List, ListItem, Box } from "@mui/material"
import { Link } from "react-router-dom"
import routes from "../routes"
import { SHOW_CASE } from "../constants"
import { deepOrange } from "@mui/material/colors"
import Avatar from "@mui/material/Avatar"
const ShowCase = () => {
  return (
    <Paper>
      <List>
        {routes.map((route, index) => {
          return route.name === SHOW_CASE ? (
            <Box key={index}></Box>
          ) : (
            <ListItem key={index}>
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 24,
                  height: 24,
                  marginRight: 1,
                }}
              >
                {index}
              </Avatar>
              <Link className="App-link" to={route.path}>
                {route.name}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}

export default ShowCase
