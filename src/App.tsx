import 'reactflow/dist/style.css'
import { addEdge } from '@src/features/Edges/edgesSlice'
import { NodeShapesBar } from '@src/features/Nodes/components'
import { nodeTypes } from '@src/features/Nodes/nodesConfig'
import { moveNode } from '@src/features/Nodes/nodesSlice'
import { useAppSelector, useAppDispatch } from '@src/hooks'
import { useCallback } from 'react'
import { useMemo } from 'react'
import ReactFlow, {
  Controls,
  Background,
  ProOptions,
  applyNodeChanges,
  addEdge as addEdgeReactFlow,
  Connection,
  NodeChange,
  MarkerType,
} from 'reactflow'

import GlobalStyles from './GlobalStyles'

const proOptions: ProOptions = { hideAttribution: true }

function App() {
  const nodesState = useAppSelector((state) => state.nodes)
  const edgesState = useAppSelector((state) => state.edges)

  const memoNodeTypes = useMemo(() => nodeTypes, [])

  const dispatch = useAppDispatch()

  const handleNodeMovement = useCallback((changes: NodeChange[]) => {
    dispatch(
      moveNode(
        applyNodeChanges(changes, nodesState.nodes)
      )
    )

  }, [dispatch, nodesState.nodes])

  const handleNodeConnection = useCallback((connection: Connection) => {
    const newEdge = {
      ...connection,
      type: 'smoothstep',
      style: {
        'stroke': '#3A3A3A'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#3A3A3A'
      },
    }
    dispatch(
      addEdge(
        addEdgeReactFlow(newEdge, edgesState.edges)
      )
    )
  }, [dispatch, edgesState.edges])


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GlobalStyles />
      <ReactFlow
        nodes={nodesState.nodes}
        edges={edgesState.edges}
        proOptions={proOptions}
        onNodesChange={handleNodeMovement}
        onConnect={handleNodeConnection}
        nodeTypes={memoNodeTypes}
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
