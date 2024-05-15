import type { ComponentType } from 'react'
import React, { useState } from 'react'
import { Handle, Position, NodeResizer, ResizeDragEvent, ResizeParams } from 'reactflow'
import type { NodeProps } from 'reactflow'

const MIN_WIDTH = 140
const MIN_HEIGHT = 70
const RHOMBUS_PADDING = 5

const internalBoxWidth = 60
const internalBoxHeight = 30
const internalBoxPositionX = (100 - internalBoxWidth) / 2
const internalBoxPositionY = (100 - internalBoxHeight) / 2

const DecisionNode: ComponentType<NodeProps> = (props) => {
  const [text, setText] = useState<string>('Decision')
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
    <div
      style={{
        width: nodeSize.width,
        height: nodeSize.height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          width: '.5rem',
          height: '.5rem',
          top: '-5%'
        }}
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        style={{
          width: '.5rem',
          height: '.5rem',
          top: '-5%'
        }}
      />
      <Handle
        id="right"
        type="target"
        position={Position.Right}
        style={{
          width: '.5rem',
          height: '.5rem',
          right: '-2.5%'
        }}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{
          width: '.5rem',
          height: '.5rem',
          right: '-2.5%'
        }}
      />
      <Handle
        id="bottom"
        type="target"
        position={Position.Bottom}
        style={{
          width: '.5rem',
          height: '.5rem',
          bottom: '-5%'
        }}
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{
          width: '.5rem',
          height: '.5rem',
          bottom: '-5%'
        }}
      />
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{
          width: '.5rem',
          height: '.5rem',
          left: '-2.5%'
        }}
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{
          width: '.5rem',
          height: '.5rem',
          left: '-2.5%'
        }}
      />
      <NodeResizer
        isVisible={props.selected}
        keepAspectRatio={false}
        minWidth={MIN_WIDTH}
        minHeight={MIN_HEIGHT}
        onResize={handleResize}
        lineStyle={{
          borderColor: '#7DC4E4'
        }}
        handleStyle={{
          backgroundColor: '#7DC4E4'
        }}
      />
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points={`
            ${RHOMBUS_PADDING},
            ${nodeSize.height / 2} ${nodeSize.width / 2},
            ${RHOMBUS_PADDING} ${nodeSize.width - RHOMBUS_PADDING},
            ${nodeSize.height / 2} ${nodeSize.width / 2},
            ${nodeSize.height - RHOMBUS_PADDING}
          `}
          fill='#FFFFFF'
          stroke="#3A3A3A"
          strokeWidth="1.5"
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
            stroke="#7DC4E4"
            fill='transparent'
            strokeWidth="1"
            strokeLinejoin="round"
            strokeDasharray="3"
          />
        }

        <foreignObject
          x={`${internalBoxPositionX}%`}
          y={`${internalBoxPositionY}%`}
          width={`${internalBoxWidth}%`}
          height={`${internalBoxHeight}%`}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              style={{
                width: '100%',
                height: '100%',
                outline: 'none',
                border: 'none',
                background: 'none',
                textAlign: 'center',
                fontSize: '15px',
                color: '#3A3A3A',
                pointerEvents: props.selected ? 'auto' : 'none',
              }}
            />
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

export default DecisionNode