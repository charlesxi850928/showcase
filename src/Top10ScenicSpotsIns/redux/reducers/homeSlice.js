/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  data: {}
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeData(state, {payload}) {
      state.data = payload.data
    }
  }
})

export const {setHomeData} = homeSlice.actions

export default homeSlice.reducer
