import 'reactflow/dist/style.css'
import { DownloadButton } from '@src/features/Download'
import { NodeShapesBar } from '@src/features/Nodes/components'
import { nodeTypes } from '@src/features/Nodes/nodesConfig'
import { useAppSelector, useAppDispatch } from '@src/store/hooks'
import { addEdge, removeEdge } from '@src/store/slices/edgesSlice'
import { moveNode } from '@src/store/slices/nodesSlice'
import GlobalStyles from '@src/styles/GlobalStyles'
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

import { focusFlowElement } from './store/slices/appSlice'

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
        <DownloadButton/>
      </ReactFlow>
    </div>
  )
}

export default App
