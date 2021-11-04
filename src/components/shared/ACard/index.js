import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const ACard = ({cardInfo, handleCardClick}) => {
  const {id, title, description, imgUrl, noAvailableImageUrl = 'assets/images/common/default-image.png'} = cardInfo
  return (
    <CardActionArea
      sx={{
        height: '100%',
        '& .MuiCardContent-root:last-of-type': {
          pb: 1.3
        }
      }}
      data-ref={`park-wrapper-${id}`}
      onClick={() => handleCardClick(cardInfo)}
      role='link'
    >
      <Card
        sx={{
          height: '100%'
        }}
      >
        <CardMedia
          image={imgUrl || noAvailableImageUrl}
          component='img'
          title={`${title} `}
          sx={{objectFit: 'contain'}}
        />

        <CardContent sx={{p: 1.25}}>
          {title && (
            <Typography
              variant='h7'
              component='h3'
              date-ref={`park-name-${id}`}
              sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant='body3' color='textSecondary' className={styles.content}>
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

ACard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func
}

export default ACard
