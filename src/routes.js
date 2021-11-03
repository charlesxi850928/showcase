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
    name: 'Scroll Card',
    path: '/scrollCard',
    component: ScrollCardInsWrapper
  }
]
export default routes
