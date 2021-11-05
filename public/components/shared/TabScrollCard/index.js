import {useState} from 'react'
import {Box, Tab, Typography} from '@mui/material'
import PropTypes from 'prop-types'
import {TabPanel, TabContext, TabList} from '@mui/lab'
import ACard from 'components/shared/ACard'
import Draggable from 'components/shared/ScrollCard/Draggable'
import ScrollWrapper from 'components/shared/ScrollCard/ScrollWrapper'
import useDeviceView from 'hooks/useDeviceView'

const children = (cardInfoList, handleCardClick) =>
  cardInfoList?.map((cardInfo) => <ACard cardInfo={cardInfo} key={cardInfo.id} handleCardClick={handleCardClick} />)

const ScrollCard = (props) => {
  const {cardData, handleCardClick} = props

  const {isDesktopDownView, isDesktopView} = useDeviceView()
  return (
    <>
      {isDesktopDownView && (
        <Draggable sx={{display: 'flex', flexWrap: 'nowrap', pb: 1}}>
          {children(cardData.cardInfoList, handleCardClick)?.map((item) => (
            <Box sx={{flexShrink: 0, mr: 2, maxWidth: '17rem'}} key={item.key}>
              {item}
            </Box>
          ))}
        </Draggable>
      )}
      {isDesktopView && <ScrollWrapper {...props}>{children(cardData.cardInfoList, handleCardClick)}</ScrollWrapper>}
    </>
  )
}

ScrollCard.propTypes = {
  cardData: PropTypes.object,
  handleCardClick: PropTypes.func
}

const TabScrollCard = (props) => {
  const {cardInfoGroupData, handleCardClick} = props
  const {cardTitle, cardInfoGroup} = cardInfoGroupData
  const [currentTab, setCurrentTab] = useState('0')

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Box {...props}>
      <Typography
        variant='h5'
        component='h2'
        sx={{paddingY: '0.8rem', paddingX: {xs: '0rem', md: '0.5rem'}}}
        date-ref='space-images'
      >
        {cardTitle}
      </Typography>
      <TabContext value={currentTab}>
        <TabList
          onChange={handleChange}
          variant='scrollable'
          indicatorColor='primary'
          aria-label={`${cardTitle}`}
          sx={{
            minHeight: 'auto',
            paddingX: '0.5rem',
            '& .MuiTab-root': {
              p: 0,
              mr: 3.8,
              fontSize: '1rem',
              height: '1.85rem',
              minHeight: 'auto'
            },
            '& .MuiTab-root.Mui-selected': {
              color: 'text.primary'
            },
            '& .MuiTabScrollButton-root': {
              width: '1.5rem',
              ':first-of-type': {
                ml: -1
              },
              ':last-of-type': {
                mr: -1
              },
              display: {xs: 'inline-flex'}
            },
            '& .MuiTabScrollButton-root.Mui-disabled': {display: 'none'},
            '& .MuiButtonBase-root': {
              maxWidth: 'unset'
            }
          }}
        >
          {cardInfoGroup.map((group, index) => (
            <Tab label={group.name} data-ref={`tab-title-${index}`} value={`${index}`} key={group.name} />
          ))}
        </TabList>

        {cardInfoGroup.map((group, index) => (
          <TabPanel value={`${index}`} sx={{p: 0, my: 2}} key={group.name}>
            <ScrollCard cardData={group} handleCardClick={handleCardClick} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

TabScrollCard.propTypes = {
  cardInfoGroupData: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func
}

export default TabScrollCard
