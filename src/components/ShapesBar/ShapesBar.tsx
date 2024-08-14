import { nodeShapesOptions } from '@src/components/ShapesBar/shapeBarConfig'
import { useAppDispatch } from '@src/store/hooks'
import { addNode } from '@src/store/slices/nodesSlice'
import { Flex, Box, Floating } from '@src/styles/mixins'

export default function NodeShapesBar() {
  const dispatch = useAppDispatch()

  const addNewNode = (nodeType: string) => {
    const newNode = {
      data: { label: 'new node' }, type: nodeType,
    }
    dispatch(addNode(newNode))
  }

  return (
    <Floating
      $left='1%'
      $top='50%'
      $transform='translateY(-50%)'
    >
      <Box>
        <Flex
          $direction='column'
          $justifyContent='center'
          $alignItems='center'
          $gap={1}
        >
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
        </Flex>
      </Box>
    </Floating>
  )
}