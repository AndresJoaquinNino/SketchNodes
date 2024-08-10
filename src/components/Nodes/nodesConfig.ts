import {
  DecisionNode,
  ProcessNode,
  TerminalNode,
  OutputNode,
  PredefineProcessNode,
  OnPageConnectorNode,
  OffPageConnectorNode,
} from '@src/components/Nodes/NodeTypes'
import { NodeTypes } from 'reactflow'

export const nodeTypes: NodeTypes = {
  Terminal: TerminalNode,
  Process: ProcessNode,
  Decision: DecisionNode,
  Output: OutputNode,
  PredefineProcess: PredefineProcessNode,
  OnPageConnector: OnPageConnectorNode,
  OffPageConnector: OffPageConnectorNode,
}