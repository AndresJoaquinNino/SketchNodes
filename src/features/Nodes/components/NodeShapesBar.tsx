import { addNode } from '@src/features/Nodes/nodesSlice'
import { useAppDispatch } from '@src/hooks'

import { nodeShapesOptions } from '../nodesConfig'
import { ShapesBox, ShapesContainer } from '../nodesStyles'

export default function NodeShapesBar() {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    const newNode = {
      data: { label: 'new node' }, type: 'Terminal',
    }
    dispatch(addNode(newNode))
  }

  return (
    <ShapesBox>
      <ShapesContainer onClick={handleClick}>
        {
          nodeShapesOptions.map((nodeShape, index) => (
            <img key={index} src={nodeShape.svgDirectory} />
          ))
        }
      </ShapesContainer>
    </ShapesBox>
  )
}