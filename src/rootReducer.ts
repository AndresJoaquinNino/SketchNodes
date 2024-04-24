import { combineReducers } from '@reduxjs/toolkit'
import edgesReducer from '@src/features/Edges/edgesSlice'
import nodesReducer from '@src/features/Nodes/nodesSlice'

const rootReducer = combineReducers({
  edges: edgesReducer,
  nodes: nodesReducer,
})

export default rootReducer
