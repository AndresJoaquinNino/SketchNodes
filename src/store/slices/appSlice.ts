import { createSlice } from '@reduxjs/toolkit'
import { Edge, Node } from 'reactflow'

import { removeEdge } from './edgesSlice'


interface appState {
  focusedFlowElement: Edge | Node | null,
}

const initialState: appState = {
  focusedFlowElement: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    focusFlowElement: (state, action) => {
      state.focusedFlowElement = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeEdge, (state) => {
        state.focusedFlowElement = null
      })
  }
})

export const {
  focusFlowElement,
} = appSlice.actions

export default appSlice.reducer