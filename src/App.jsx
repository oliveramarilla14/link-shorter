import { ThemeProvider } from '@emotion/react'
import AppBar from './components/AppBar'
import { theme } from './components/styled/theme'
import Hero from './components/Hero'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Hero />
    </ThemeProvider>

  )
}

export default App
