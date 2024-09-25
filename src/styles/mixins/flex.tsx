import styled from 'styled-components'

import { IDefaultTheme } from '../theme'

interface FlexProps {
  $direction?: 'row' | 'column'
  $justifyContent?: 'flex-start' | 'center'
  | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  $alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch'
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  $gap?: number
  $width?: number | string
  $height?: number | string
}

const Flex = styled.div<FlexProps & { theme: IDefaultTheme }>(({
  $direction = 'row',
  $justifyContent = 'flex-start',
  $alignItems = 'stretch',
  $wrap = 'nowrap',
  $gap = 0,
  $width,
  $height,
  theme,
}) => ({
  display: 'flex',
  flexDirection: $direction,
  justifyContent: $justifyContent,
  alignItems: $alignItems,
  flexWrap: $wrap,
  gap: theme.spacingFn($gap),
  width: $width,
  height: $height,
}))

export default Flex