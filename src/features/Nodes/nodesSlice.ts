import { createSlice } from '@reduxjs/toolkit'
import { Node } from 'reactflow'

interface NodeState {
  nodes: Node[],
}

const initialState: NodeState = {
  nodes: [],
}

export const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    addNode: (state, action) => {
      const nodeId = (state.nodes.length + 1).toString()
      state.nodes = state.nodes.concat({
        id: nodeId,
        position: { x: 100, y: 100 },
        ...action.payload
      })
    },
    // moveNode: (state, action) => {
    //   state.nodes = action.payload
    // },
    // connectNodes: (state, action) => {
    //   state.edges = action.payload
    // }
  },
})

export const {
  addNode,
  // moveNode,
  // connectNodes
} = nodesSlice.actions

export default nodesSlice.reducer