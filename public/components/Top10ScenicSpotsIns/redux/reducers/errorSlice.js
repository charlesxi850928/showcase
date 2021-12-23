/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit'

const initialState = {data: {}}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, {payload}) {
      state.data = payload
    }
  }
})

export const {setError} = errorSlice.actions

export default errorSlice.reducer
