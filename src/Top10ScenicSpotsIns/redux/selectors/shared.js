import {createSelector} from '@reduxjs/toolkit'

const getAppState = (state) => state.shared
const getThemeMode = createSelector(getAppState, (app) => app.theme.settings.mode)
const getCurrentTheme = createSelector(getAppState, (app) => app.theme.raw)

const selectors = {
  getThemeMode,
  getCurrentTheme
}

export default selectors
