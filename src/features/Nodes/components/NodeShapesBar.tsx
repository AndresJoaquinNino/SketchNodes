import { nodeShapesOptions } from '../nodesConfig'
import { ShapesBox, ShapesContainer } from '../nodesStyles'

export default function NodeShapesBar() {
  return (
    <ShapesBox>
      <ShapesContainer>
        {
          nodeShapesOptions.map((nodeShape, index) => (
            <img key={index} src={nodeShape.svgDirectory} />
          ))
        }
      </ShapesContainer>
    </ShapesBox>
  )
}