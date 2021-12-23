import {Button, Box, Dialog, DialogTitle, DialogContent, IconButton, DialogActions, Divider} from '@mui/material'
import Link from 'mui/Link'
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import muiIconList from 'mui/IconList'
import {useT, T} from 'i18n'
import useDeviceView from 'hooks/useDeviceView'
import ATypography from '../../../mui/ATypography'

const NoticeDetailsDialog = ({open, handleClose, children, dialogButton}) => {
  const closeButtonText = useT({k: 'Common.close'})
  const {isDesktopDownView} = useDeviceView()
  return (
    <Dialog
      fullScreen={isDesktopDownView}
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        <ATypography variant='h5' dataRef='banner-message-details'>
          <T k='Common.bannerAlert.dialog_title' />
        </ATypography>
        <IconButton
          data-ref='top-right-close-button'
          aria-label={closeButtonText}
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10
          }}
        >
          <muiIconList.CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider aria-hidden />
      <DialogContent id='alert-dialog-description'>{children}</DialogContent>
      <Divider aria-hidden />
      <DialogActions>
        <Button
          sx={{fontSize: '1rem', height: '2.25rem', color: 'common.grayscale2', borderColor: 'common.grayscale3'}}
          data-ref='close-button'
          variant='outlined'
          onClick={handleClose}
        >
          {closeButtonText}
        </Button>
        {dialogButton()}
      </DialogActions>
    </Dialog>
  )
}

NoticeDetailsDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.any,
  dialogButton: PropTypes.any
}

const maxMessageLength = 170
const NoticeBar = ({alertData, setShowBanner}) => {
  const {isDesktopDownView, isDesktopView} = useDeviceView()
  const showCTA = alertData?.label || alertData?.targetLink
  const hideBannerLabel = useT({k: 'Common.bannerAlert.hide_banner'})
  const bannerMessage = alertData?.message || ''

  const [showLearnMore, setShowLearnMore] = useState(false)
  const trueMessageText = bannerMessage.replace(/<\/?.+?>/g, '')
  const bannerMessageOverMaxLength = trueMessageText.length > maxMessageLength
  const bannerMessageSummery = bannerMessageOverMaxLength ? trueMessageText.slice(0, maxMessageLength) : bannerMessage

  useEffect(() => {
    if (bannerMessageOverMaxLength) {
      setShowLearnMore(true)
    } else {
      setShowLearnMore(false)
    }
  }, [bannerMessage.length, bannerMessageOverMaxLength])

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const buttonOfCTA = () => (
    <>
      {showCTA && (
        <Button
          variant='contained'
          data-ref='banner-action-btn'
          LinkComponent={Link}
          href={alertData.targetLink}
          onClick={handleClose}
          sx={{ml: 2, whiteSpace: 'nowrap', height: '2.25rem'}}
        >
          <ATypography variant='body1'>{alertData.label}</ATypography>
        </Button>
      )}
    </>
  )
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          px: 1,
          py: {xs: 1, md: 0},
          flexFlow: {xs: 'column', md: 'row'},
          alignItems: {xs: 'flex-end', md: 'center'},
          justifyContent: 'space-between',
          bgcolor: 'bannerAlert.bgColor'
        }}
        data-ref='banner-alert-content'
      >
        <Box sx={{display: 'flex'}}>
          <Box dataRef='banner-message-summary'>
            <ATypography
              sx={{display: 'inline'}}
              variant='body2'
              dangerouslySetInnerHTML={{__html: bannerMessageSummery}}
            />
            {showLearnMore && (
              <>
                ...
                <Button
                  variant='text'
                  data-ref='learn-more-banner-message-btn'
                  onClick={handleClickOpen}
                  sx={{
                    color: 'common.white',
                    textDecoration: 'underline',
                    whiteSpace: 'nowrap',
                    display: 'inline',
                    mx: 0.5,
                    cursor: 'pointer',
                    p: 0
                  }}
                >
                  <T k='Common.bannerAlert.learn_more' />
                </Button>
              </>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {isDesktopDownView && (
            <Button
              data-ref='mobile-hidden-banner-btn'
              variant='text'
              aria-label={hideBannerLabel}
              onClick={() => {
                setShowBanner(false)
              }}
              sx={{padding: ' 0.5rem 0.5rem', color: 'common.white'}}
            >
              <T k='Common.close' />
            </Button>
          )}
          {buttonOfCTA()}

          {isDesktopView && (
            <IconButton
              data-ref='hidden-banner-btn'
              aria-label={hideBannerLabel}
              onClick={() => {
                setShowBanner(false)
              }}
              sx={{padding: ' 0 0.5rem', color: 'common.white'}}
            >
              <muiIconList.ExpandLessIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {open && (
        <NoticeDetailsDialog open={open} handleClose={handleClose} dialogButton={buttonOfCTA}>
          <ATypography
            variant='body1'
            dataRef='banner-message-details'
            dangerouslySetInnerHTML={{__html: alertData?.message}}
          />
        </NoticeDetailsDialog>
      )}
    </>
  )
}
NoticeBar.propTypes = {
  setShowBanner: PropTypes.func,
  alertData: PropTypes.object
}

export default NoticeBar
