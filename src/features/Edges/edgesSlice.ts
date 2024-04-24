import { createSlice } from '@reduxjs/toolkit'
import { Edge } from 'reactflow'

interface EdgeState {
  edges: Edge[],
}

const initialState: EdgeState = {
  edges: [],
}

export const edgesSlice = createSlice({
  name: 'edges',
  initialState,
  reducers: {
    addEdge: (state, action) => {
      state.edges = action.payload
    }
  },
})

export const {
  addEdge
} = edgesSlice.actions

export default edgesSlice.reducer