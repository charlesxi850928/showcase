import {Card, CardActionArea, CardMedia, CardContent} from '@mui/material'
import PropTypes from 'prop-types'
import ATypography from '../../../mui/ATypography'
import styles from './TopSpotItem.module.scss'
import {getPublicPath} from '../../../utils/GeneralUtils'

const TopSpotItem = ({spotDetails}) => {
  const {description, image} = spotDetails
  return (
    <Card classes={{root: styles.cardRounded}} className={styles.card}>
      <CardActionArea>
        <CardMedia
          className={styles.image}
          image={getPublicPath(image)}
          title={description}
          data-ref={`top-spot-${description}`}
        />
        <CardContent className={styles.text}>
          <ATypography w6 component='h3'>
            {description}
          </ATypography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

TopSpotItem.propTypes = {
  spotDetails: PropTypes.object.isRequired
}

export default TopSpotItem
