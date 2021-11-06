import {Dialog, IconButton, Box} from '@mui/material'
import {Close} from '@mui/icons-material'
import useDeviceView from 'hooks/useDeviceView'
import PropTypes from 'prop-types'

const FullScreenDialog = ({name, openDialog, setOpenDialog, children, paperPropsClassName, paperPropsSX}) => {
  const {isDesktopView, isDesktopDownView} = useDeviceView()
  const closeDialogHandler = () => {
    setOpenDialog(false)
  }

  const childrenClassName = `& .${name}`
  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={closeDialogHandler}
      maxWidth='xl'
      PaperProps={{
        'aria-label': `${name} dialog`,
        className: paperPropsClassName,
        sx: {
          backgroundColor: 'common.black',
          margin: 'unset',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          ...paperPropsSX
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: {xs: 'unset', md: '98vh'},
          minHeight: {xs: '100%', md: 'unset'},
          [childrenClassName]: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }
        }}
      >
        <IconButton
          sx={{
            minHeight: '3rem',
            color: 'common.white',
            alignSelf: 'flex-end',
            right: {xs: 0, md: '0.5rem'},
            position: 'absolute',
            top: 0
          }}
          onClick={closeDialogHandler}
          aria-label={`close ${name}`}
        >
          <Close sx={{fontSize: (isDesktopView && '3rem') || (isDesktopDownView && '2.1rem')}} />
        </IconButton>
        {children}
      </Box>
    </Dialog>
  )
}

FullScreenDialog.propTypes = {
  name: PropTypes.string,
  openDialog: PropTypes.bool,
  setOpenDialog: PropTypes.func,
  children: PropTypes.node,
  paperPropsClassName: PropTypes.string,
  paperPropsSX: PropTypes.object
}

export default FullScreenDialog
