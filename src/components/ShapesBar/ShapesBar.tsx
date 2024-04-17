import { ShapesBox, ShapesContainer } from './ShapesBarStyles'
import { shapesOptions } from './ShapesBarConfig'

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