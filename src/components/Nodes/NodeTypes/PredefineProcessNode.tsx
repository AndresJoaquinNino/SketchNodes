import type { ComponentType } from 'react'
import React, { useState } from 'react'
import { NodeResizer, ResizeDragEvent, ResizeParams } from 'reactflow'
import type { NodeProps } from 'reactflow'

import { NodeWrapper } from '..'

const MIN_WIDTH = 120
const MIN_HEIGHT = 60

const internalBoxWidth = 70
const internalBoxHeight = 60
const internalBoxPositionX = (100 - internalBoxWidth) / 2
const internalBoxPositionY = (100 - internalBoxHeight) / 2
const spaceBetweenBoxes = 86
const leftBoxWidth = 100 - spaceBetweenBoxes
const rightBoxWidth = 100 - leftBoxWidth

const PredefineProcessNode: ComponentType<NodeProps> = (props) => {
  const [text, setText] = useState<string>('PredefineProcessNode')
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
        top: '-5%',
      }}
      handleRightStyles={{
        width: '.5rem',
        height: '.5rem',
        right: '-2.5%',
      }}
      handleBottomStyles={{
        width: '.5rem',
        height: '.5rem',
        bottom: '-5%'
      }}
      handleLeftStyles={{
        width: '.5rem',
        height: '.5rem',
        left: '-2.5%'
      }}
    >
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
      <svg
        width="100%"
        height="100%"
        fill="#ffffff"
        viewBox={`0 0 ${nodeSize.width / 3} ${nodeSize.height / 3}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="0.5"
          y="0.5"
          width="98%"
          height="96%"
          stroke="#3A3A3A"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <line
          x1={`${leftBoxWidth + 0.5}%`}
          y1="2%"
          x2={`${leftBoxWidth + 0.5}%`}
          y2="98%"
          stroke="#3A3A3A"
          strokeWidth="0.5"
        />
        <line
          x1={`${rightBoxWidth}%`}
          y1="2%"
          x2={`${rightBoxWidth}%`}
          y2="98%"
          stroke="#3A3A3A"
          strokeWidth="0.5"
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
                fontSize: '5px',
                color: '#3A3A3A',
                pointerEvents: props.selected ? 'auto' : 'none',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            />
          </div>
        </foreignObject>
      </svg>
    </NodeWrapper>
  )
}

export default PredefineProcessNode