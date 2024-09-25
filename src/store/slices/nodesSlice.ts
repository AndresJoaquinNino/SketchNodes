import { createSlice } from '@reduxjs/toolkit'
import { Node } from 'reactflow'
import { generateShortUUID } from '@src/utils/functions'

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
      const nodeIdMap: Map<string, boolean> = new Map()
      const nodeList: Node[] = state.nodes
      for (const node of nodeList) {
        nodeIdMap.set(node.id, true)
      }

      const getUniqueID = () => {
        const newID = generateShortUUID()
        const nodeIdAlreadyExist = nodeIdMap.has(newID)
        if (nodeIdAlreadyExist) {
          return getUniqueID()
        }
        return newID
      }

      state.nodes = state.nodes.concat({
        id: getUniqueID(),
        position: { x: 100, y: 100 },
        ...action.payload
      })
    },
    moveNode: (state, action) => {
      state.nodes = action.payload
    },
  },
})

export const {
  addNode,
  moveNode,
} = nodesSlice.actions

export default nodesSlice.reducer