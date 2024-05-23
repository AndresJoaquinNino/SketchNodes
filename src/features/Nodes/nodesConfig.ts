import Decision from '@src/assets/shapes/Decision.svg'
import Off_page_Connector from '@src/assets/shapes/Off_page_Connector.svg'
import On_page_Connector from '@src/assets/shapes/On_page_Connector.svg'
import Output from '@src/assets/shapes/Output.svg'
import Predefined_Process from '@src/assets/shapes/Predefined_Process.svg'
import Process from '@src/assets/shapes/Process.svg'
import Terminal from '@src/assets/shapes/Terminal.svg'
import {
  DecisionNode,
  ProcessNode,
  TerminalNode,
  OutputNode
} from '@src/features/Nodes/components/NodeTypes'
import { NodeTypes } from 'reactflow'

export const nodeShapesOptions = [
  {
    name: 'Process',
    svgDirectory: Process,
    nodeType: 'Process',
  },
  {
    name: 'Terminal',
    svgDirectory: Terminal,
    nodeType: 'Terminal',
  },
  {
    name: 'Decision',
    svgDirectory: Decision,
    nodeType: 'Decision',
  },
  {
    name: 'Output',
    svgDirectory: Output,
    nodeType: 'Output',
  },
  {
    name: 'Predefined Process',
    svgDirectory: Predefined_Process,
    nodeType: 'Terminal',
  },
  {
    name: 'On Page Connector',
    svgDirectory: On_page_Connector,
    nodeType: 'Terminal',
  },
  {
    name: 'Off Page Connector',
    svgDirectory: Off_page_Connector,
    nodeType: 'Terminal',
  },
]

export const nodeTypes: NodeTypes = {
  Terminal: TerminalNode,
  Process: ProcessNode,
  Decision: DecisionNode,
  Output: OutputNode,
}