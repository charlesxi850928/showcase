import React from 'react'
import {List, ListItem, Box, Typography, Link} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {deepOrange} from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import {SHOW_CASE} from '../constants'
import APaper from '../components/shared/APaper'
// eslint-disable-next-line import/no-cycle
import routes from './routes'
import Header from './Header'
import Footer from '../Footer'

const normalLinksCount = routes.filter((route) => route.component).length

const ShowCase = () => (
  <>
    <Header />
    <APaper sx={{mb: '3.5rem'}}>
      <List sx={{paddingY: 0}}>
        {routes
          .filter((route) => route.component)
          .map((route, index) =>
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
      <List sx={{paddingTop: 0}}>
        {routes
          .filter((route) => !route.component)
          .map((route, index) =>
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
                  <Typography>{normalLinksCount + index}</Typography>
                </Avatar>
                <Link href={route.path} target='_blank' rel='noreferrer'>
                  {route.name}
                </Link>
              </ListItem>
            )
          )}
      </List>
    </APaper>
    <Footer />
  </>
)

export default ShowCase
