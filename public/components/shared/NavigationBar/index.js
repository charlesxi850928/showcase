import {Grid} from '@mui/material'

import PropTypes from 'prop-types'

const NavigationBar = ({
  bgColor = 'black',
  selectedBGColor = 'gray',
  color = 'white',
  minWidth = '4rem',
  maxWidth = '12rem',
  children
}) => (
  <Grid
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor,
      color,
      width: minWidth,
      padding: '0.75rem',
      borderRadius: '0.5rem',
      transition: '.3s',
      '&:hover': {
        width: maxWidth,
        '& > div ': {
          justifyContent: 'flex-start',
          '& > p': {
            display: 'block'
          }
        }
      },
      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        paddingY: '0.75rem',
        '&:hover': {
          backgroundColor: selectedBGColor,
          paddingX: '0.125rem',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        },
        '& > svg': {
          width: '2rem',
          heigth: '2rem',
          paddingRight: '0.25rem'
        },
        '& > p': {
          display: 'none',
          whiteSpace: 'nowrap'
        }
      }
    }}
  >
    {children}
  </Grid>
)

NavigationBar.propTypes = {
  bgColor: PropTypes.string,
  selectedBGColor: PropTypes.string,
  color: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  children: PropTypes.node
}
export default NavigationBar
