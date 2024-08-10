import { useAppDispatch } from '@src/store/hooks'
import { addNode } from '@src/store/slices/nodesSlice'

import { nodeShapesOptions } from '../nodesConfig'
import { ShapesBox, ShapesContainer } from '../nodesStyles'

export default function NodeShapesBar() {
  const dispatch = useAppDispatch()

  const addNewNode = (nodeType: string) => {
    const newNode = {
      data: { label: 'new node' }, type: nodeType,
    }
    dispatch(addNode(newNode))
  }

  return (
    <ShapesBox>
      <ShapesContainer>
        {
          nodeShapesOptions.map((nodeShape, index) => (
            <img
              key={index}
              src={nodeShape.svgDirectory}
              onClick={() => addNewNode(nodeShape.nodeType)}
              style={{
                cursor: 'pointer',
              }}
            />
          ))
        }
      </ShapesContainer>
    </ShapesBox>
  )
}