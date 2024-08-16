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
    },
    removeEdge: (state, action) => {
      const edgeToRemove: Edge = action.payload
      const reducedEdges = state.edges.filter((edge) => edge.id !== edgeToRemove.id)
      state.edges = reducedEdges
    },
  }
})

export const {
  addEdge,
  removeEdge,
} = edgesSlice.actions

export default edgesSlice.reducer