import styled from 'styled-components'

import { IDefaultTheme } from '../theme'

const Box = styled.div<{ theme: IDefaultTheme }>(({ theme }) => ({
  background: theme.colors.background,
  borderRadius: theme.borders.radius.small,
  borderWidth: theme.borders.width.medium,
  borderStyle: 'solid',
  borderColor: theme.colors.border,
  boxShadow: theme.boxShadow,
  padding: theme.spacingFn(1),
}))

export default Box