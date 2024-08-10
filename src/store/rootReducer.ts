import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '@src/store/slices/appSlice'
import edgesReducer from '@src/store/slices/edgesSlice'
import nodesReducer from '@src/store/slices/nodesSlice'

const rootReducer = combineReducers({
  app: appReducer,
  edges: edgesReducer,
  nodes: nodesReducer,
})

export default rootReducer
