import styled from 'styled-components'

import { IDefaultTheme } from '../theme'

export const ButtonBox = styled.button<{ theme: IDefaultTheme }>(({ theme }) => ({
  cursor: 'pointer',
  background: theme.colors.background,
  borderRadius: theme.borders.radius.small,
  borderWidth: theme.borders.width.medium,
  borderStyle: 'solid',
  borderColor: theme.colors.border,
  boxShadow: theme.boxShadow,
  padding: theme.spacingFn(1),
  transition: 'transform 0.1s ease',

  '&:active': {
    transform: 'scale(0.95)',
  },
}))
