import 'reactflow/dist/style.css'
import { NodeShapesBar } from '@src/features/Nodes/components'
import { moveNode } from '@src/features/Nodes/nodesSlice'
import { useAppSelector, useAppDispatch } from '@src/hooks'
import { useCallback } from 'react'
import ReactFlow, {
  Controls,
  Background,
  ProOptions,
  applyNodeChanges,
  Edge,
  NodeChange,
} from 'reactflow'

import GlobalStyles from './GlobalStyles'

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]

const proOptions: ProOptions = { hideAttribution: true }

function App() {
  const nodesState = useAppSelector((state) => state.nodes)

  const dispatch = useAppDispatch()

  const handleNodeMovement =  useCallback((changes: NodeChange[]) => {
    dispatch(
      moveNode(
        applyNodeChanges(changes, nodesState.nodes)
      )
    )

  },[dispatch, nodesState.nodes])


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GlobalStyles />
      <ReactFlow
        nodes={nodesState.nodes}
        edges={initialEdges}
        proOptions={proOptions}
        onNodesChange={handleNodeMovement}
        nodesDraggable
        fitView
        onlyRenderVisibleElements
      >
        <Background />
        <Controls />
        <NodeShapesBar />
      </ReactFlow>
    </div>
  )
}

export default App
