import 'reactflow/dist/style.css'
import { addEdge, removeEdge } from '@src/features/Edges/edgesSlice'
import { NodeShapesBar } from '@src/features/Nodes/components'
import { nodeTypes } from '@src/features/Nodes/nodesConfig'
import { moveNode } from '@src/features/Nodes/nodesSlice'
import { useAppSelector, useAppDispatch } from '@src/hooks'
import React, {useEffect} from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useKeyPress } from 'reactflow'
import ReactFlow, {
  Edge,
  isEdge,
  Controls,
  Background,
  ProOptions,
  applyNodeChanges,
  addEdge as addEdgeReactFlow,
  Connection,
  NodeChange,
  MarkerType,
} from 'reactflow'

import { focusFlowElement } from './appSlice'
import GlobalStyles from './GlobalStyles'

const proOptions: ProOptions = { hideAttribution: true }

function App() {
  const { focusedFlowElement } = useAppSelector((state) => state.app)
  const nodesState = useAppSelector((state) => state.nodes)
  const edgesState = useAppSelector((state) => state.edges)

  const memoNodeTypes = useMemo(() => nodeTypes, [])

  const deletePressed = useKeyPress('Delete')

  const dispatch = useAppDispatch()


  useEffect(() => {
    if (deletePressed) {
      if (focusedFlowElement !== null && isEdge(focusedFlowElement)) {
        dispatch(removeEdge(focusedFlowElement))
      }
    }
  }, [deletePressed, dispatch, focusedFlowElement])


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

  const handleEdgeClick = (_event: React.MouseEvent, edge: Edge) => {
    dispatch(
      focusFlowElement(edge)
    )
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GlobalStyles />
      <ReactFlow
        nodes={nodesState.nodes}
        edges={edgesState.edges}
        proOptions={proOptions}
        onNodesChange={handleNodeMovement}
        onConnect={handleNodeConnection}
        onEdgeClick={handleEdgeClick}
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
