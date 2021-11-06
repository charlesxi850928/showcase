import PropTypes from 'prop-types'
import {Box, Typography} from '@mui/material'
import useDeviceView from 'hooks/useDeviceView'
import ACard from 'components/shared/ACard'
import ScrollWrapper from './ScrollWrapper'
import Draggable from './Draggable'

const children = (cardInfoList, handleCardClick) =>
  cardInfoList?.map((cardInfo) => <ACard cardInfo={cardInfo} key={cardInfo.id} handleCardClick={handleCardClick} />)

const ScrollCard = (props) => {
  const {cardData, handleCardClick} = props
  const {cardTitle, cardInfoList} = cardData

  const {isDesktopDownView, isDesktopView} = useDeviceView()
  return (
    <>
      {cardTitle && (
        <Typography
          variant='h5'
          component='h2'
          sx={{paddingY: '0.8rem', paddingX: {xs: '0rem', md: '0.5rem'}}}
          data-ref='scroll-card-images'
        >
          {cardTitle}
        </Typography>
      )}
      {isDesktopDownView && (
        <Draggable sx={{display: 'flex', flexWrap: 'nowrap', pb: 1}}>
          {children(cardInfoList, handleCardClick)?.map((item) => (
            <Box sx={{flexShrink: 0, mr: 2, maxWidth: '17rem'}} key={item.key}>
              {item}
            </Box>
          ))}
        </Draggable>
      )}
      {isDesktopView && <ScrollWrapper {...props}>{children(cardInfoList, handleCardClick)}</ScrollWrapper>}
    </>
  )
}

ScrollCard.propTypes = {
  cardData: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func
}

export default ScrollCard
