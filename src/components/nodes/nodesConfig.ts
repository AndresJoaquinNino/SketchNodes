import {
  DecisionNode,
  ProcessNode,
  TerminalNode,
  OutputNode,
  PredefineProcessNode,
  OnPageConnectorNode,
  OffPageConnectorNode,
} from '@src/components/nodes/nodeTypes'
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