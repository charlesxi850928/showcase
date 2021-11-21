import {lazy} from 'react'
import {SHOW_CASE} from './constants'

const TodoListWrapper = lazy(() => import('instancewrapper/TodoListWrapper'))
const TimerInsWrapper = lazy(() => import('instancewrapper/TimerInsWrapper'))
const DefaultImageInsWrapper = lazy(() => import('instancewrapper/DefaultImageInsWrapper'))
const CardThumbnailInsWrapper = lazy(() => import('instancewrapper/CardThumbnailInsWrapper'))
const GalleryInsWrapper = lazy(() => import('instancewrapper/GalleryInsWrapper'))
const PopperWithArrowInsWrapper = lazy(() => import('instancewrapper/PopperWithArrowInsWrapper'))
const CustomerHooksInsWrapper = lazy(() => import('instancewrapper/CustomerHooksInsWrapper'))
const CarouselInsWrapper = lazy(() => import('instancewrapper/CarouselInsWrapper'))
const ScrollCardInsWrapper = lazy(() => import('instancewrapper/ScrollCardInsWrapper'))
const TabScrollCardInsWrapper = lazy(() => import('instancewrapper/TabScrollCardInsWrapper'))
const Photos360DegreeInsWrapper = lazy(() => import('instancewrapper/Photos360DegreeInsWrapper'))
const CardsInsWrapper = lazy(() => import('instancewrapper/CardsInsWrapper'))
const AnimationRadarInsWrapper = lazy(() => import('instancewrapper/AnimationRadarInsWrapper'))
const AnimationShootingStarsInsWrapper = lazy(() => import('instancewrapper/AnimationShootingStarsInsWrapper'))
const ClockInsWrapper = lazy(() => import('instancewrapper/ClockInsWrapper'))
const SignInSignUpInsWrapper = lazy(() => import('instancewrapper/SignInSignUpInsWrapper'))
const RatingInsWrapper = lazy(() => import('instancewrapper/RatingInsWrapper'))
const NavigationBarInsWrapper = lazy(() => import('instancewrapper/NavigationBarInsWrapper'))
const CalculatorInsWrapper = lazy(() => import('instancewrapper/CalculatorInsWrapper'))
const AMapInsWrapper = lazy(() => import('instancewrapper/AMapInsWrapper'))

// eslint-disable-next-line import/no-cycle
const ShowCase = lazy(() => import('./components/ShowCase'))

const routes = [
  {name: SHOW_CASE, path: '/showCase', component: ShowCase},
  {
    name: 'Todo List',
    path: '/todoList',
    component: TodoListWrapper
  },
  {
    name: 'Timer',
    path: '/Timer',
    component: TimerInsWrapper
  },
  {
    name: 'Default Image',
    path: '/defaultImage',
    component: DefaultImageInsWrapper
  },
  {
    name: 'Card Thumbnail',
    path: '/cardThumbnail',
    component: CardThumbnailInsWrapper
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: GalleryInsWrapper
  },
  {
    name: 'Popper With Arrow',
    path: '/popperWithArrow',
    component: PopperWithArrowInsWrapper
  },
  {
    name: 'Customer Hooks, Avatar, Badge',
    path: '/customerHooksIns',
    component: CustomerHooksInsWrapper
  },
  {
    name: 'Carousel',
    path: '/carousel',
    component: CarouselInsWrapper
  },
  {
    name: 'Cards',
    path: '/cards',
    component: CardsInsWrapper
  },
  {
    name: 'Scroll Card',
    path: '/scrollCard',
    component: ScrollCardInsWrapper
  },
  {
    name: 'Tab Scroll Card',
    path: '/tabScrollCard',
    component: TabScrollCardInsWrapper
  },
  {
    name: 'Photos 360 Degree',
    path: '/photos360Degree',
    component: Photos360DegreeInsWrapper
  },
  {
    name: 'Animation Radar',
    path: '/animationRadar',
    component: AnimationRadarInsWrapper
  },
  {
    name: 'Animation Shooting Stars',
    path: '/animationShootingStars',
    component: AnimationShootingStarsInsWrapper
  },
  {
    name: 'Clock',
    path: '/clock',
    component: ClockInsWrapper
  },
  {
    name: 'Sign In & Sign Up',
    path: '/signInSignUp',
    component: SignInSignUpInsWrapper
  },
  {
    name: 'Rating',
    path: '/rating',
    component: RatingInsWrapper
  },
  {
    name: 'Navigation Bar',
    path: '/navigationBar',
    component: NavigationBarInsWrapper
  },
  {
    name: 'Calculator',
    path: '/calculator',
    component: CalculatorInsWrapper
  },
  {
    name: 'Visualized',
    path: '/components/VisualizedIns'
  },
  {
    name: 'AMap',
    path: '/amap',
    component: AMapInsWrapper
  }
]
export default routes
