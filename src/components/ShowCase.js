import React from 'react'
import {Paper, List, ListItem, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import {deepOrange} from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import {SHOW_CASE} from '../constants'
// eslint-disable-next-line import/no-cycle
import routes from '../routes'

const ShowCase = () => (
  <Paper>
    <List>
      {routes.map((route, index) =>
        route.name === SHOW_CASE ? (
          <Box key={route.name} />
        ) : (
          <ListItem key={route.name}>
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                width: 24,
                height: 24,
                marginRight: 1
              }}
            >
              {index}
            </Avatar>
            <Link className='App-link' to={route.path}>
              {route.name}
            </Link>
          </ListItem>
        )
      )}
    </List>
  </Paper>
)

export default ShowCase
