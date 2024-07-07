import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '@src/appSlice'
import edgesReducer from '@src/features/Edges/edgesSlice'
import nodesReducer from '@src/features/Nodes/nodesSlice'

const rootReducer = combineReducers({
  app: appReducer,
  edges: edgesReducer,
  nodes: nodesReducer,
})

export default rootReducer
