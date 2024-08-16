import { ReactFlowMinZIndex } from '@src/utils/constants'

export interface IDefaultTheme {
  colors: {
    primary: string
    background: string
    border: string
    regularText: string
  }
  shapeFontSize: {
    medium: string
    xLarge: string
  }
  borders: {
    width: {
      medium: string
    }
    radius: {
      small: string
    }
  }
  boxShadow: string
  spacingFn: (quantity: number) => string
  zIndexFn: (index: number) => number
}

export const theme: IDefaultTheme = {
  colors: {
    primary: '#7DC4E4',
    background: '#ffffff',
    border: '#3A3A3A',
    regularText: '#3A3A3A',
  },
  shapeFontSize: {
    medium: '5px',
    xLarge: '15px',
  },
  borders: {
    width: {
      medium: '2px',
    },
    radius: {
      small: '5px',
    },
  },
  boxShadow: '3px 3px 5px #0000004d',
  spacingFn: (quantity: number) => `${quantity * 0.5}rem`,
  zIndexFn: (index: number) => ReactFlowMinZIndex + Math.abs(index),
}