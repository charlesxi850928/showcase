import {Paper} from '@mui/material'
import PropTypes from 'prop-types'

const APaper = (props) => {
  const {sx, children} = props
  return <Paper sx={{marginX: {xs: 2, md: 20}, marginY: 2, paddingX: 2, paddingY: 4, ...sx}}>{children}</Paper>
}

APaper.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node
}

export default APaper
