import {styled} from '@mui/material/styles'
import MuiPopper from '@mui/material/Popper'

const borderRadius = '1rem'
const boxShadow =
  'rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px, rgb(0 0 0 / 30%) 0px 8px 10px 0px;'
const marginLeft = '0.5rem !important'
const marginRight = '0.5rem !important'
const dialogCommonStyle = {borderRadius, boxShadow, marginLeft, marginRight}

const Popper = styled(MuiPopper, {
  shouldForwardProp: (prop) => prop !== 'arrow'
})(({theme}) => ({
  zIndex: 1,
  '& > div': {
    position: 'relative'
  },
  '&[data-popper-placement*="bottom"]': {
    ...dialogCommonStyle,
    marginTop: '0.5rem !important',
    '& .MuiPopper-arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9rem',
      width: '2rem',
      height: '1rem',
      '&::before': {
        borderWidth: '0 1rem 1rem 1rem',
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`
      }
    }
  },
  '&[data-popper-placement*="top"]': {
    ...dialogCommonStyle,
    marginBottom: '0.5rem !important',
    '& .MuiPopper-arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9rem',
      width: '2rem',
      height: '1rem',
      '&::before': {
        borderWidth: '1rem 1rem 0 1rem',
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`
      }
    }
  },
  '&[data-popper-placement*="right"]': {
    ...dialogCommonStyle,
    marginLeft: '1rem !important',
    '& .MuiPopper-arrow': {
      left: 0,
      marginLeft: '-0.9rem',
      height: '2rem',
      width: '1rem',
      '&::before': {
        borderWidth: '1rem 1rem 1rem 0',
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`
      }
    }
  },
  '&[data-popper-placement*="left"]': {
    ...dialogCommonStyle,
    marginRight: '1rem !important',
    '& .MuiPopper-arrow': {
      right: 0,
      marginRight: '-0.9rem',
      height: '2rem',
      width: '1rem',
      '&::before': {
        borderWidth: '1rem 0 1rem 1rem',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`
      }
    }
  }
}))

export const Arrow = styled('div')({
  position: 'absolute',
  fontSize: 7,
  width: '2rem',
  height: '2rem',
  color: 'red',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid'
  }
})

export default Popper
