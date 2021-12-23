import React from 'react'
import {List, ListItem, Box, Typography, Link} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {deepOrange} from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import APaper from './shared/APaper'
import routes from '../routes'

const normalLinksCount = routes.filter((route) => route.component).length

const ShowCase = () => (
  <APaper sx={{marginBottom: 5}}>
    <List sx={{paddingY: 0}}>
      {routes
        .filter((route) => route.component)
        .map((route, index) => (
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
        ))}
    </List>
    <List sx={{paddingTop: 0}}>
      {routes
        .filter((route) => !route.component)
        .map((route, index) => (
          <ListItem key={route.name}>
            <Avatar
              sx={{
                bgcolor: deepOrange[900],
                width: 32,
                height: 32,
                marginRight: 1
              }}
            >
              <Typography>{normalLinksCount + index}</Typography>
            </Avatar>
            <Link href={route.path} target='_blank' rel='noreferrer'>
              {route.name}
            </Link>
          </ListItem>
        ))}
    </List>
  </APaper>
)

export default ShowCase
