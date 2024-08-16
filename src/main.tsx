import { theme } from '@src/styles/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
