import type { ComponentType } from 'react'
import { Handle, Position } from 'reactflow'
import type { NodeProps } from 'reactflow'

const TerminalNode: ComponentType<NodeProps> = (props) => {
  console.log('TerminalNode selected = ', props.selected)
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{
          width: '.5rem',
          height: '.5rem',
          top: '-1px'
        }}
      />
      <svg
        width="100"
        height="50"
        viewBox="0 0 50 25"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width="47"
          height="22"
          rx="11"
          stroke="#3A3A3A"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default TerminalNode