import PropTypes from 'prop-types'
import {Box, Typography} from '@mui/material'
import useDeviceView from 'hooks/useDeviceView'
import ACard from 'components/shared/ACard'
import ScrollWrapper from './ScrollWrapper'
import Draggable from './Draggable'

const children = (cardInfoList) => cardInfoList?.map((cardInfo) => <ACard cardInfo={cardInfo} key={cardInfo.id} />)

const ScrollCard = (props) => {
  const {cardData} = props

  const {isDesktopDownView, isDesktopView} = useDeviceView()
  return (
    <>
      {cardData?.cardTitle && (
        <Typography
          variant='h5'
          component='h2'
          sx={{paddingY: '0.8rem', paddingX: {xs: '0rem', md: '0.5rem'}}}
          dataRef='space-images'
        >
          {cardData.cardTitle}
        </Typography>
      )}
      {isDesktopDownView && (
        <Draggable sx={{display: 'flex', flexWrap: 'nowrap', pb: 1}}>
          {children(cardData.cardInfoList)?.map((item) => (
            <Box sx={{flexShrink: 0, mr: 2, maxWidth: '17rem'}} key={item.key}>
              {item}
            </Box>
          ))}
        </Draggable>
      )}
      {isDesktopView && <ScrollWrapper {...props}>{children(cardData.cardInfoList)}</ScrollWrapper>}
    </>
  )
}

ScrollCard.propTypes = {
  cardData: PropTypes.object
}

export default ScrollCard
