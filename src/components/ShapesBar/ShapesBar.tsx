import { shapesOptions } from './ShapesBarConfig'
import { ShapesBox, ShapesContainer } from './ShapesBarStyles'

export default function ShapesBar() {
  return (
    <ShapesBox>
      <ShapesContainer>
        {
          shapesOptions.map((shapeElement, index) => (
            <img key={index} src={shapeElement.svgDirectory} />
          ))
        }
      </ShapesContainer>
    </ShapesBox>
  )
}