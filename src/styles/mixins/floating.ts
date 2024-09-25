import styled from 'styled-components'

import { IDefaultTheme } from '../theme'

interface FloatingProps {
  $top?: string
  $right?: string
  $bottom?: string
  $left?: string
  $transform?: string
}

const Floating = styled.div<FloatingProps & { theme: IDefaultTheme }>(({
  $top,
  $right,
  $bottom,
  $left,
  $transform,
  theme,
}) => ({
  zIndex: theme.zIndexFn(1),
  position: 'fixed',
  top: $top,
  right: $right,
  bottom: $bottom,
  left: $left,
  transform: $transform,
}))

export default Floating