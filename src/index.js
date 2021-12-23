import React, {Suspense} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import routes from 'ShowCase/routes'
import ShowCase from 'ShowCase'
import Top10ScenicSpots from 'Top10ScenicSpots/pages/home'
import reportWebVitals from './reportWebVitals'
import Home from './components/Home'
import ABackdrop from './components/shared/ABackdrop'

import {
  SHOW_CASE,
  SHOW_CASE_PATH,
  VISUALIZED,
  VISUALIZED_PATH,
  TOP_10_SCENICSPOTS,
  TOP_10_SCENICSPOTS_PATH
} from './constants'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<ABackdrop />}>
        <Route exact path='/' component={Home} />
        <Route name={VISUALIZED} path={VISUALIZED_PATH} />
        <Route name={TOP_10_SCENICSPOTS} path={TOP_10_SCENICSPOTS_PATH} component={Top10ScenicSpots} />
        <Route name={SHOW_CASE} path={SHOW_CASE_PATH} component={ShowCase} />
        {routes.map((r) => r.component && <Route key={r.name} path={r.path} component={r.component} />)}
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
