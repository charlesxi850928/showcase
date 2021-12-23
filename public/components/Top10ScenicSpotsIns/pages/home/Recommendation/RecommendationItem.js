import {Card, CardMedia, CardActionArea, CardContent} from '@mui/material'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import {RoutePath} from 'routes'
import ATypography from 'mui/ATypography'
import {getPublicPath} from 'utils/GeneralUtils'
import {clearCampsiteFilterCondition} from '../../shared/ClearCampsiteFilterCondition/ClearCampsiteFilterCondition'
// import muiIconList from '../../../mui/IconList'

const noAvailableImageUrl = getPublicPath('assets/images/common/default-image.png')

const RecommendationItem = ({placeDetails = {}}) => {
  const {parkId, parkName, imgUrl, contractCode} = placeDetails
  const router = useRouter()

  const handleParkClick = () => {
    clearCampsiteFilterCondition()
    router.push({
      pathname: RoutePath.FacilityDetail,
      query: {contrCode: contractCode, facilityId: parkId}
    })
  }
  return (
    <Card
      sx={{
        height: '100%',
        '& .MuiCardContent-root': {
          width: '100%'
        },
        '& .MuiCardContent-root:last-of-type': {
          pb: 1.3
        }
      }}
    >
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
        data-ref={`park-wrapper-${parkId}`}
        role='link'
        aria-label={parkName}
        onClick={handleParkClick}
      >
        <CardMedia
          image={imgUrl || noAvailableImageUrl}
          component='img'
          title={`${parkName} `}
          sx={{objectFit: 'contain'}}
        />

        <CardContent sx={{p: 1.25}}>
          <ATypography
            variant='h7'
            component='h3'
            dataRef={`park-name-${parkId}`}
            sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
          >
            {parkName}
          </ATypography>

          {/* <Divider sx={{m: '0.6rem 0'}} aria-hidden /> */}

          {/* <Grid container sx={{alignItems: 'flexStart'}}>
            <ATypography color='primary'>
              <muiIconList.StarIcon sx={{width: '0.9rem', height: '0.9rem'}} />
            </ATypography>
            <ATypography variant='body2' color='textSecondary' dataRef='park-favorite-number'>
              4.93(123)
            </ATypography>
          </Grid> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

RecommendationItem.propTypes = {
  placeDetails: PropTypes.object.isRequired
}

export default RecommendationItem
