import {Grid, Box, Button, Paper, ClickAwayListener, Typography} from '@mui/material'
import {Close} from '@mui/icons-material'
import PropTypes from 'prop-types'
import {useState} from 'react'
import Popper, {Arrow} from './Popper'

const PopperWithArrow = (props) => {
  const {open, setOpen, anchorEl, placement, title, content, ariaLabelContent, ...otherProps} = props
  const closeAriaLabelText = 'Close'
  const [arrowRef, setArrowRef] = useState(null)

  const handleClose = (event) => {
    event.preventDefault()
    setOpen((prev) => !prev)
  }
  return (
    <>
      <Popper
        open={open}
        style={{
          zIndex: 2
        }}
        anchorEl={anchorEl}
        placement={placement}
        role='dialog'
        aria-modal='true'
        aria-label={ariaLabelContent}
        arrow
        modifiers={[
          {
            name: 'arrow',
            enabled: true,
            options: {
              element: arrowRef
            }
          }
        ]}
        {...otherProps}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
            <Arrow ref={setArrowRef} className='MuiPopper-arrow' />
            <Paper>
              <Grid sx={{borderRadius: '1rem'}}>
                {title && (
                  <Grid
                    sx={{
                      py: '0.25rem',
                      px: '0.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderRadius: '0.25rem 0.25rem 0rem 0rem',
                      backgroundColor: '#F5F5F5'
                    }}
                  >
                    <Typography variant='h6'>{title}</Typography>
                    <Button
                      aria-label={closeAriaLabelText}
                      onClick={handleClose}
                      sx={{p: '0rem', ml: '5rem', minWidth: '0rem', color: '#616161'}}
                    >
                      <Close />
                    </Button>
                  </Grid>
                )}
                {content}
              </Grid>
            </Paper>
          </Box>
        </ClickAwayListener>
      </Popper>
    </>
  )
}

PopperWithArrow.propTypes = {
  placement: PropTypes.string,
  anchorEl: PropTypes.any,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  ariaLabelContent: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node
}
export default PopperWithArrow
