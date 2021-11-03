import {Card, Box, CardMedia, CardContent, Typography, Link} from '@mui/material'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const ACard = ({cardInfo}) => {
  const {title, description, imgUrl, link} = cardInfo
  return (
    <Link underline='none' href={link}>
      <Card
        sx={{
          height: '100%',
          borderRadius: '4px',
          boxShadow: 'none'
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: '4px'
          }}
        >
          <CardMedia image={imgUrl} component='img' title={title} sx={{width: '100%', pointerEvents: 'none'}} />
          <CardContent sx={{px: 0}}>
            <Typography w7 mb={1} sx={styles.content}>
              {title}
            </Typography>
            <Typography variant='body3' color='textSecondary' className={styles.content}>
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  )
}

ACard.propTypes = {
  cardInfo: PropTypes.object.isRequired
}

export default ACard
