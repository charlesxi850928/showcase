import React from 'react'
import {List, ListItem, Box, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {deepOrange} from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import {SHOW_CASE} from '../constants'
import APaper from './shared/APaper'
// eslint-disable-next-line import/no-cycle
import routes from '../routes'

const ShowCase = () => (
  <APaper>
    <List>
      {routes.map((route, index) =>
        route.name === SHOW_CASE ? (
          <Box key={route.name} />
        ) : (
          <ListItem key={route.name}>
            <Avatar
              sx={{
                bgcolor: deepOrange[900],
                width: 32,
                height: 32,
                marginRight: 1
              }}
            >
              <Typography>{index < 10 ? `0${index}` : index}</Typography>
            </Avatar>
            <NavLink to={route.path}>
              <Typography>{route.name}</Typography>
            </NavLink>
          </ListItem>
        )
      )}
    </List>
  </APaper>
)

export default ShowCase
