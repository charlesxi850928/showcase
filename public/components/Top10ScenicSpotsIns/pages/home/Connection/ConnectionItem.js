import {CardActionArea, CardMedia} from '@mui/material'
import PropTypes from 'prop-types'
import styles from './ConnectionItem.module.scss'
import {getPublicPath} from '../../../utils/GeneralUtils'

const TopSpotItem = ({info}) => {
  const {description, image} = info
  return (
    <CardActionArea>
      <CardMedia className={styles.image} image={getPublicPath(image)} title={description} />
    </CardActionArea>
  )
}

TopSpotItem.propTypes = {
  info: PropTypes.object.isRequired
}

export default TopSpotItem
