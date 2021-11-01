import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

const AlertDialog = ({title, contentText, open, setOpen, doConfirm}) => {
  const handleClose = () => {
    setOpen(false)
  }
  const handleConfirm = () => {
    setOpen(false)
    doConfirm()
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{contentText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

AlertDialog.propTypes = {
  title: PropTypes.string,
  contentText: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  doConfirm: PropTypes.func
}

export default AlertDialog
