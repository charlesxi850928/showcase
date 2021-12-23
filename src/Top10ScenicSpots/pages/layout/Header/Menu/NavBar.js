/**
 * @file   : MenuBar.js
 * @author : yangping.meng (yangping.meng@AspiraConnect.com)
 * @date   : 8/16/2021, 3:51:16 PM
 */

import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  List,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {T, useT} from 'i18n'
import ATypography from 'mui/ATypography'
import Link from 'mui/Link'
import muiIconList from 'mui/IconList'
import useDeviceView from 'hooks/useDeviceView'
import NestedMenuItem from './NestedMenuItem'
import {RoutePath} from '../../../../routes'

function DesktopNavBar({menuData, iconMenus}) {
  const filterIconMenus = iconMenus.filter((item) => item.desktopShow)
  return (
    <>
      {menuData.map((menu) => {
        const subMenu = []
        menu.children.forEach((item) =>
          subMenu.push(
            <MenuItem role='menuitem' key={item.labelKey} sx={{padding: '1rem 2rem'}}>
              <Link href={item.to} underline='none' color='textPrimary'>
                <ATypography component='span'>{item.labelKey}</ATypography>
              </Link>
            </MenuItem>
          )
        )
        return (
          <NestedMenuItem
            data-ref={menu.dataRef}
            sx={{p: 2}}
            tabIndex={menu.tabIndex}
            subItems={subMenu}
            key={menu.dataRef}
            component={Link}
            href={menu.to}
          >
            <ATypography component='span'>
              <T k={menu.labelKey} />
            </ATypography>
          </NestedMenuItem>
        )
      })}
      <Divider orientation='vertical' aria-hidden flexItem sx={{margin: '0!important'}} />
      {filterIconMenus?.map((item) => (
        <NestedMenuItem
          component='div'
          key={item.id}
          data-ref={item.id}
          sx={{p: 0}}
          onClick={item.action}
          subItems={item.subItems}
        >
          <IconButton aria-label={item.name}>{item.icon}</IconButton>
        </NestedMenuItem>
      ))}
    </>
  )
}
DesktopNavBar.propTypes = {
  menuData: PropTypes.array,
  iconMenus: PropTypes.array
}
function MobileNavBar({menuData, iconMenus}) {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel, childrenLength) => (event, isExpanded) => {
    if (childrenLength > 0) {
      event.stopPropagation()
      setExpanded(isExpanded ? panel : false)
    }
  }
  const filterIconMenus = iconMenus.filter((item) => item.mobileShow)
  return (
    <>
      <Box>
        {menuData.map((menu) => (
          <Accordion
            expanded={expanded === menu.dataRef}
            onChange={handleChange(menu.dataRef, menu.children.length)}
            sx={{
              margin: '0 !important'
            }}
            key={menu.dataRef}
          >
            <AccordionSummary
              expandIcon={menu.children.length > 0 && <muiIconList.KeyboardArrowDownIcon />}
              aria-controls={`panel-${menu.dataRef}-content`}
              id={`panel-${menu.dataRef}-header`}
              sx={{
                margin: 0,
                p: 0,
                pr: 2,
                '& .MuiAccordionSummary-content': {
                  margin: '0 !important'
                },
                '& .Mui-expanded': {
                  margin: '0 !important'
                }
              }}
            >
              <MenuItem component={Link} href={menu.to}>
                <ATypography>
                  <T k={menu.labelKey} />
                </ATypography>
              </MenuItem>
            </AccordionSummary>
            <Divider />
            <AccordionDetails sx={{p: 0}}>
              <List disablePadding>
                {menu.children.map((subMenu) => (
                  <ListItem key={subMenu.key} sx={{padding: 0, textIndent: '1rem'}} divider>
                    <MenuItem component={Link} href={subMenu.to}>
                      <ATypography>{subMenu.labelKey}</ATypography>
                    </MenuItem>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <List disablePadding>
        {filterIconMenus.map((item) => (
          <ListItem key={item.id} onClick={item.action} divider>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </>
  )
}
MobileNavBar.propTypes = {
  menuData: PropTypes.array,
  iconMenus: PropTypes.array
}
const NavBar = (props) => {
  const {isDesktopDownView, isDesktopView} = useDeviceView()
  /* eslint-disable no-unused-vars */
  const {isDarkMode, handleDarkModeChange, iconMenusData} = props

  const customerText = useT({k: 'Common.headerBar.customer'})
  const facilityText = useT({k: 'Common.headerBar.facility'})
  const languageText = useT({k: 'Common.headerBar.language'})
  const helpText = useT({k: 'Common.headerBar.help'})
  /* eslint-disable no-unused-vars */
  const switchModeText = useT({k: 'Common.headerBar.switch_mode'})
  const navMenuData = [
    {
      labelKey: 'Common.headerBar.home',
      dataRef: 'menu-home-btn',
      tabIndex: 0,
      to: RoutePath.Home,
      children: []
    },
    {
      labelKey: 'Common.headerBar.visit',
      dataRef: 'menu-visit-btn',
      tabIndex: 0,
      to: RoutePath.Home,
      children: [
        {
          labelKey: facilityText,
          key: 'facility',
          to: ''
        },
        {
          labelKey: customerText,
          key: 'customer',
          to: ''
        }
      ]
    },
    {
      labelKey: 'Common.headerBar.donate',
      dataRef: 'menu-donate-btn',
      tabIndex: 0,
      to: RoutePath.Home,
      children: []
    },
    {
      labelKey: 'Common.headerBar.official_stuff',
      dataRef: 'menu-stuff-btn',
      tabIndex: 0,
      to: RoutePath.Home,
      children: []
    }
  ]

  if (isDesktopDownView) {
    return <MobileNavBar menuData={navMenuData} iconMenus={iconMenusData} />
  }
  if (isDesktopView) {
    return <DesktopNavBar menuData={navMenuData} iconMenus={iconMenusData} />
  }
  return null
}

NavBar.propTypes = {
  isDarkMode: PropTypes.bool,
  handleDarkModeChange: PropTypes.func,
  iconMenusData: PropTypes.array
}

export default NavBar
