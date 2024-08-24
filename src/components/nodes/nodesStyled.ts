import { IDefaultTheme } from '@src/styles/theme'
import styled from 'styled-components'


interface NodeInput {
  $selected: boolean
  $fontSize: string
}

export const NodeInput = styled.input<NodeInput & { theme: IDefaultTheme }>(({
  $selected,
  $fontSize,
  theme,
}) => ({
  width: '100%',
  height: '100%',
  outline: 'none',
  border: 'none',
  background: 'none',
  textAlign: 'center',
  fontSize: $fontSize,
  color: theme.colors.regularText,
  pointerEvents: $selected ? 'auto' : 'none',
}))