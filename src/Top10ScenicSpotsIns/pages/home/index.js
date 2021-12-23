import {Paper} from '@mui/material'
import {shallowEqual, useSelector} from 'react-redux'
import {MainContainer} from 'components/shared/MainContainer'
// import HeroContent from './Hero/HeroContent'
// import Adventure from './Adventure'
// import Recommendation from './Recommendation'

const homeItemStyle = {px: {xs: 1, sm: 6.25, md: 14}, py: {xs: 1, sm: 2.5, md: 4}}

const Home = () => {
  const {data} = useSelector(
    (state) => ({
      data: state.home.data
    }),
    shallowEqual
  )
  const heroImageRegionLabel = 'Hero Region'

  const {basicRecommendations} = data.homeData || {}

  return (
    <>
      <Paper square elevation={0} role='region' aria-label={heroImageRegionLabel}>
        {/* <HeroContent heroData={data.homeData.heroImage} /> */}
      </Paper>
      <MainContainer sx={homeItemStyle} role='region' aria-label={data.homeData.adventure.title}>
        {/* <Adventure data={data.homeData.adventure} /> */}
      </MainContainer>
      {basicRecommendations.showSection && (
        <MainContainer sx={homeItemStyle} role='region' aria-label={basicRecommendations?.title}>
          {/* <Recommendation data={basicRecommendations} /> */}
        </MainContainer>
      )}
    </>
  )
}

export default Home
