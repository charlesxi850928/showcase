import {useState} from 'react'
import {Box, Tab} from '@mui/material'
import PropTypes from 'prop-types'
import {TabPanel, TabContext, TabList} from '@mui/lab'
import StyledCarousel from 'components/shared/Scroll/StyledCarousel'
import SectionHeader from '../SectionHeader/SectionHeader'
import RecommendationItem from './RecommendationItem'

const RecommendedPlaces = ({data = {}}) => {
  const {recommendationGroup} = data

  const [currentTab, setCurrentTab] = useState('0')

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Box>
      <SectionHeader title={data.title} dataRef='recommended-section-header' />
      <TabContext value={currentTab}>
        <TabList
          onChange={handleChange}
          variant='scrollable'
          indicatorColor='primary'
          aria-label={`${data.title}`}
          sx={{
            minHeight: 'auto',
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
          {recommendationGroup.map((item, index) => (
            <Tab label={item.name} data-ref={`tab-title-${index}`} value={`${index}`} key={item.name} />
          ))}
        </TabList>

        {recommendationGroup.map((item, index) => (
          <TabPanel value={`${index}`} sx={{p: 0, my: 2}} key={item.name}>
            <StyledCarousel>
              {recommendationGroup[index]?.recommendations?.map((place) => (
                <RecommendationItem placeDetails={place} key={place.parkId} />
              ))}
            </StyledCarousel>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

RecommendedPlaces.propTypes = {
  data: PropTypes.object
}

export default RecommendedPlaces
