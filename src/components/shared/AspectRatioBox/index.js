import PropTypes from 'prop-types'
import {Box} from '@mui/material'

/**
 * @typedef {object} Props
 * @prop {number} aspectRatio - The aspect ratio of the box is the ratio of its width to its height
 */

/**
 * @param {Props} props
 * @returns
 */
function AspectRatioBox(props) {
  const {children, aspectRatio} = props

  return (
    <Box sx={{position: 'relative', width: '100%', paddingBottom: `calc(100% / ${aspectRatio})`}}>
      <Box sx={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>{children}</Box>
    </Box>
  )
}

AspectRatioBox.propTypes = {
  aspectRatio: PropTypes.any,
  children: PropTypes.any
}

export default AspectRatioBox
