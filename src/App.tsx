import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './core/router'
import './locales/config'
import { ThemeProvider } from 'styled-components'
import { useDynamicHeight } from './core/hooks'
import { GlobalStyles, theme } from './core/theme'
import { FallBack } from './components'

// TODO: add font
// TODO: add checkbox + popup on form screen
// TODO: q6 - add logic for input
// TODO: signup - add logic for input + radio buttons
// TODO: setup loader and alert components and logic

function App() {
  useDynamicHeight()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<FallBack />}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
