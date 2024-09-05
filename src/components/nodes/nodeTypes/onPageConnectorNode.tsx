import { Flex } from '@src/styles/mixins'
import type { ComponentType } from 'react'
import React, { useState } from 'react'
import { NodeResizer, ResizeDragEvent, ResizeParams } from 'reactflow'
import type { NodeProps } from 'reactflow'
import { useTheme } from 'styled-components'

import { NodeInput } from '../nodesStyled'
import NodeWrapper from '../nodeWrapper'

const MIN_WIDTH = 35
const MIN_HEIGHT = 35

const internalBoxWidth = 65
const internalBoxHeight = 65
const internalBoxPositionX = (100 - internalBoxWidth) / 2
const internalBoxPositionY = (100 - internalBoxHeight) / 2

const OnPageConnectorNode: ComponentType<NodeProps> = (props) => {

  const styledTheme = useTheme()

  const [text, setText] = useState<string>('OnPageConnectorNode')
  const [nodeSize, setNodeSize] = useState({
    width: MIN_WIDTH,
    height: MIN_HEIGHT

  })

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleResize = (_event: ResizeDragEvent, params: ResizeParams) => {
    setNodeSize({
      width: params.width,
      height: params.height
    })
  }

  return (
    <NodeWrapper
      width={nodeSize.width}
      height={nodeSize.height}
      handleTopStyles={{
        width: '.5rem',
        height: '.5rem',
        top: '-5px',
      }}
      handleRightStyles={{
        width: '.5rem',
        height: '.5rem',
        right: '-5px',
      }}
      handleBottomStyles={{
        width: '.5rem',
        height: '.5rem',
        bottom: '-5px'
      }}
      handleLeftStyles={{
        width: '.5rem',
        height: '.5rem',
        left: '-5px'
      }}
    >
      <NodeResizer
        isVisible={props.selected}
        keepAspectRatio={false}
        minWidth={MIN_WIDTH}
        minHeight={MIN_HEIGHT}
        onResize={handleResize}
        lineStyle={{
          borderColor: styledTheme.colors.primary
        }}
        handleStyle={{
          backgroundColor: styledTheme.colors.primary
        }}
      />
      <svg
        width={'100%'}
        height={'100%'}
        viewBox={`0 0 ${nodeSize.width / 3} ${nodeSize.height / 3}`}
        fill={styledTheme.colors.background}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1%"
          y="2%"
          width={'98%'}
          height={'96%'}
          rx="100"
          stroke={styledTheme.colors.border}
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        {
          props.selected
          &&
          <rect
            x={`${internalBoxPositionX}%`}
            y={`${internalBoxPositionY}%`}
            width={`${internalBoxWidth}%`}
            height={`${internalBoxHeight}%`}
            stroke={styledTheme.colors.primary}
            strokeWidth="0.3"
            strokeLinejoin="round"
            strokeDasharray="1"
          />
        }
        <foreignObject
          x={`${internalBoxPositionX}%`}
          y={`${internalBoxPositionY}%`}
          width={`${internalBoxWidth}%`}
          height={`${internalBoxHeight}%`}
        >
          <Flex
            $width='100%'
            $height='100%'
            $justifyContent='center'
            $alignItems='center'
          >
            <NodeInput
              type="text"
              value={text}
              onChange={handleTextChange}
              $selected={props.selected}
              $fontSize={styledTheme.shapeFontSize.medium}
            />
          </Flex>
        </foreignObject>
      </svg>
    </NodeWrapper>
  )
}

export default OnPageConnectorNode