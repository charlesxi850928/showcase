import {Card, Box, CardMedia, CardContent} from '@mui/material'
import PropTypes from 'prop-types'
import ATypography from 'mui/ATypography'
import Link from 'mui/Link'
import styles from './AdventureItem.module.scss'

const AdventureItem = ({adventureDetails, single}) => {
  const {title, description, image, link, id} = adventureDetails
  const cardContentStyle = single
    ? {
        position: 'absolute',
        bottom: 0,
        px: 3
      }
    : {px: 0}
  const textStyle = {
    color: single ? 'common.white' : 'text.secondary'
  }
  return (
    <Link underline='none' href={link} data-ref={`adventure-item-${id}`}>
      <Card
        sx={{
          height: '100%',
          boxShadow: 'none'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}
        >
          <CardMedia
            image={image}
            component='img'
            title={title}
            sx={{width: '100%', maxHeight: single ? '20rem' : 'none', pointerEvents: 'none', borderRadius: '4px'}}
          />
          {single && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'transparent linear-gradient(271deg, #FFFFFF00 0%, #000000DE 100%) 0% 0% no-repeat padding-box;'
              }}
            />
          )}
          <CardContent sx={cardContentStyle}>
            <ATypography w7 variant={single ? 'h2' : 'bodyl0'} mb={0.5} sx={{...textStyle}} className={styles.content}>
              {title}
            </ATypography>
            <ATypography variant={single ? 'bodyl0' : 'body2'} sx={{...textStyle}} className={styles.content}>
              {description}
            </ATypography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  )
}

AdventureItem.propTypes = {
  adventureDetails: PropTypes.object.isRequired,
  single: PropTypes.bool
}

export default AdventureItem
