import 'reactflow/dist/style.css'
import ReactFlow, {
  Controls,
  Background,
  ProOptions,
  Node,
  Edge
} from 'reactflow'

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]
const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]

const proOptions: ProOptions = { hideAttribution: true }

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        proOptions={proOptions}
        nodesDraggable
        fitView
        onlyRenderVisibleElements
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App
