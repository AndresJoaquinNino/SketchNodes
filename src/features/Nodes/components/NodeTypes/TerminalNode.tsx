import type { ComponentType } from 'react'
import React, { useState } from 'react'
import { Handle, Position, NodeResizer, ResizeDragEvent, ResizeParams } from 'reactflow'
import type { NodeProps } from 'reactflow'

const MIN_WIDTH = 120
const MIN_HEIGHT = 60
const DEFAULT_WIDTH = 300
const DEFAULT_HEIGHT = 150

const TerminalNode: ComponentType<NodeProps> = (props) => {
  const [text, setText] = useState<string>('Hello')
  const [nodeSize, setNodeSize] = useState({
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT

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
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{
          width: '.5rem',
          height: '.5rem',
          top: '-1px'
        }}
      />
      <NodeResizer
        isVisible={props.selected}
        keepAspectRatio={false}
        minWidth={MIN_WIDTH}
        minHeight={MIN_HEIGHT}
        onResize={handleResize}
      />
      <svg
        width={'100%'}
        height={'100%'}
        viewBox={`0 0 ${nodeSize.width / 3} ${nodeSize.height / 3}`}
        fill="#FFFFFF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1%"
          y="2%"
          width={'98%'} // 98%
          height={'96%'} // 96%
          rx="11"
          stroke="#3A3A3A"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        {
          props.selected
          &&
          <rect
            x="13%"
            y="10%"
            width={'74%'}
            height={'80%'}
            stroke="#7DC4E4"
            strokeWidth="0.3"
            strokeDasharray="1"
          />
        }
        <foreignObject
          x="13%"
          y="10%"
          width={'74%'}
          height={'80%'}
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
              }}
            />
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

export default TerminalNode