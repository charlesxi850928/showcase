import {useEffect, useState} from 'react'
import {Box, Link} from '@mui/material'
import PropTypes from 'prop-types'
import useDeviceView from 'hooks/useDeviceView'
import AddIcon from '@mui/icons-material/Add'

const CircularMenu = ({menus}) => {
  const {isMobileView} = useDeviceView()
  const [clonedMenus, setClonedMenus] = useState(menus)
  const [open, setOpen] = useState(false)
  const handleToggleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  useEffect(() => {
    setClonedMenus(isMobileView ? menus.slice(0, 4) : menus)
  }, [isMobileView])
  return (
    <Box
      display='flex'
      alignContent='center'
      justifyContent='center'
      className='navigation'
      sx={{
        '& ul': {
          position: 'relative',
          width: 200,
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          '& li': {
            position: 'absolute',
            listStyle: 'none',
            left: 0,
            transformOrigin: 100,
            transition: '0.25s',
            transitionDelay: 'calc(0.1s * var(--i))',
            transform: 'rotate(0deg) translateX(80px)',
            '& a': {
              background: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItem: 'center',
              padding: '0.325rem',
              borderRadius: '50%',
              color: '#000',
              boxShadow: '0 3px 4px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              transform: `rotate(calc(360deg / -${clonedMenus.length} * var(--i)))`,
              transition: '0.5s',
              '&:hover': {
                color: '#ff1252'
              }
            }
          },
          '& .toggle': {
            width: 60,
            height: 60,
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            borderRadius: '50%',
            cursor: 'pointer',
            transition: '0.25s'
          },
          '&.active': {
            ' li': {
              transform: `rotate(calc(360deg /${clonedMenus.length} * var(--i) ))`
            },
            ' .toggle': {
              transform: 'rotate(135deg)'
            }
          }
        }
      }}
    >
      <Box className={`menus ${open ? 'active' : ''}`} component='ul'>
        <Box className='toggle' onClick={handleToggleClick}>
          <AddIcon fontSize='large' />
        </Box>
        {clonedMenus.map((menu, index) => (
          <Box
            className='menu'
            component='li'
            key={menu.text}
            sx={{
              '--i': index
            }}
          >
            <Link to={{}} alt={menu.text}>
              {menu.icon}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

CircularMenu.propTypes = {menus: PropTypes.array.isRequired}

export default CircularMenu
