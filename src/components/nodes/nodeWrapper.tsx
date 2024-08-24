import { Flex } from '@src/styles/mixins'
import React from 'react'
import { Handle, Position, } from 'reactflow'

interface NodeWrapperProps {
  width: number | string
  height: number | string
  handleTopStyles?: React.CSSProperties
  handleRightStyles?: React.CSSProperties
  handleBottomStyles?: React.CSSProperties
  handleLeftStyles?: React.CSSProperties
  children: React.ReactNode
}

const NodeWrapper: React.FC<NodeWrapperProps> = (props) => {
  return (
    <Flex
      $width={props.width}
      $height={props.height}
      $justifyContent='center'
      $alignItems='center'
    >
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={props.handleTopStyles}
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        style={props.handleTopStyles}
      />
      <Handle
        id="right"
        type="target"
        position={Position.Right}
        style={props.handleRightStyles}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={props.handleRightStyles}
      />
      <Handle
        id="bottom"
        type="target"
        position={Position.Bottom}
        style={props.handleBottomStyles}
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={props.handleBottomStyles}
      />
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={props.handleLeftStyles}
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={props.handleLeftStyles}
      />
      {props.children}
    </Flex>
  )
}

export default NodeWrapper