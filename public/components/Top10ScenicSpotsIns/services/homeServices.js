import {getPublicBaseURL, isEmptyObj} from 'components/shared/util'
import {setHomeData} from '../redux/reducers/homeSlice'
import {getHomePageData} from './API'

const formateRecommendPlace = (basicObj) => {
  if (basicObj && basicObj.recommendationGroup) {
    const newGroup = basicObj.recommendationGroup.filter((item) => !isEmptyObj(item.recommendations))
    return {
      ...basicObj,
      recommendationGroup: newGroup,
      showSection: newGroup.length > 0
    }
  }
  return {
    showSection: false
  }
}

export async function getHomeData(store, ctx) {
  const response = await fetch(`${getPublicBaseURL(ctx)}/mockData/home.json`)
  const json = await response.json()
  const responseFromApi = await getHomePageData(ctx)

  const homeData = {...json.homeData, ...responseFromApi}
  const formatedRecommendations = formateRecommendPlace(homeData?.basicRecommendations)
  Object.assign(homeData, {basicRecommendations: formatedRecommendations})

  store.dispatch(setHomeData({data: {homeData}}))

  // store.dispatch(setHomeData({data: json}))
  return {success: true}
}
