import {useEffect, useState} from 'react'
import {Grid, Box, Link, Typography} from '@mui/material'
import PropTypes from 'prop-types'
import useDeviceView from 'hooks/useDeviceView'

const MagicMenu = ({menus}) => {
  const {isMobileView} = useDeviceView()
  const [clonedMenus, setClonedMenus] = useState(menus)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const handleMenuClick = (index) => {
    setSelectedIndex(index)
  }
  useEffect(() => {
    setSelectedIndex(0)
    setClonedMenus(isMobileView ? menus.slice(0, 4) : menus)
  }, [isMobileView])
  return (
    <Box
      display='flex'
      alignContent='center'
      justifyContent='center'
      className='navigation'
      sx={{
        background: 'white',
        borderRadius: '0.5rem',
        '& ul': {
          position: 'relative',
          padding: 0,
          margin: 0,
          '& li': {
            position: 'relative',
            width: '4rem',
            height: '4rem',
            zIndex: 1,
            listStyle: 'none',
            cursor: 'pointer',
            '& a': {
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textDecoration: 'none',
              color: 'black',
              '& svg': {
                height: '4rem',
                display: 'block',
                transition: '0.5s'
              },
              '& p': {
                position: 'absolute',
                transition: '0.5s',
                opacity: 0,
                transform: 'translateY(1.5rem)'
              }
            },
            '&.active': {
              'a svg': {
                transform: 'translateY(-2rem)'
              },
              'a p': {
                opacity: 1,
                transform: 'translateY(1rem)'
              }
            }
          },
          '& .indicator': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            top: '-50%',
            background: 'green',
            borderRadius: '50%',
            border: '0.25rem solid black',
            '&:before': {
              position: 'absolute',
              content: '""',
              width: '1.2rem',
              height: '1.2rem',
              background: 'transparent',
              top: '50%',
              left: '-1.2rem',
              borderTopRightRadius: '1.2rem',
              boxShadow: '1px -8px 0 0 black'
            },
            '&:after': {
              position: 'absolute',
              content: '""',
              width: '1.2rem',
              height: '1.2rem',
              background: 'transparent',
              top: '50%',
              right: '-1.2rem',
              borderTopLeftRadius: '1.2rem',
              boxShadow: '-1px -8px 0 0 black'
            }
          }
        }
      }}
    >
      <Grid component='ul' display='flex'>
        {clonedMenus.map((menu, index) => (
          <Grid
            component='li'
            key={menu.text}
            className={index === selectedIndex ? 'active' : ''}
            onClick={() => handleMenuClick(index)}
          >
            <Link to={{}}>
              {menu.icon}
              <Typography>{menu.text}</Typography>
            </Link>
          </Grid>
        ))}
        <Box
          className='indicator'
          sx={{
            transition: '0.5s',
            transform: `translateX(calc(4rem * ${selectedIndex}))`
          }}
        />
      </Grid>
    </Box>
  )
}

MagicMenu.propTypes = {menus: PropTypes.array.isRequired}

export default MagicMenu
