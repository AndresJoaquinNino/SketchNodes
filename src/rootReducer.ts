import { combineReducers } from '@reduxjs/toolkit'
import nodesReducer from '@src/features/Nodes/nodesSlice'

const rootReducer = combineReducers({
  nodes: nodesReducer
})

export default rootReducer
