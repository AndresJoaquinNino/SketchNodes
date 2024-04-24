import 'reactflow/dist/style.css'
import { NodeShapesBar } from '@src/features/Nodes'
import { useAppSelector } from '@src/hooks'
import ReactFlow, {
  Controls,
  Background,
  ProOptions,
  Edge
} from 'reactflow'

import GlobalStyles from './GlobalStyles'

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]

const proOptions: ProOptions = { hideAttribution: true }

function App() {
  const nodesState = useAppSelector((state) => state.nodes)

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GlobalStyles />
      <ReactFlow
        nodes={nodesState.nodes}
        edges={initialEdges}
        proOptions={proOptions}
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
