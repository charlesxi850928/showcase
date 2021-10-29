import {lazy} from 'react'
import {SHOW_CASE} from './constants'

const TodoList = lazy(() => import('./components/TodoList'))
const TimerIns = lazy(() => import('./components/TimerIns'))
const DefaultImageIns = lazy(() => import('./components/DefaultImageIns'))
const CardThumbnailIns = lazy(() => import('./components/CardThumbnailIns'))
const GalleryIns = lazy(() => import('./components/GalleryIns'))
const PopperWithArrowIns = lazy(() => import('./components/PopperWithArrowIns'))
// eslint-disable-next-line import/no-cycle
const ShowCase = lazy(() => import('./components/ShowCase'))

const routes = [
  {name: SHOW_CASE, path: '/showCase', component: ShowCase},
  {
    name: 'Todo List',
    path: '/todoList',
    component: TodoList
  },
  {
    name: 'Timer',
    path: '/Timer',
    component: TimerIns
  },
  {
    name: 'Default Image',
    path: '/defaultImage',
    component: DefaultImageIns
  },
  {
    name: 'Card Thumbnail',
    path: '/cardThumbnail',
    component: CardThumbnailIns
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: GalleryIns
  },
  {
    name: 'Popper With Arrow',
    path: '/popperWithArrow',
    component: PopperWithArrowIns
  }
]
export default routes
