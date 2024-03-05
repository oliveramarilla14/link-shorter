import { ThemeProvider } from '@emotion/react'
import AppBar from './components/AppBar'
import { theme } from './components/styled/theme'
import Hero from './components/Hero'
import Shorter from './components/Shorter'
import Statics from './components/Statics'
import Boost from './components/Boost'
import Footer from './components/styled/Footer'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Hero />
      <Shorter />
      <Statics />
      <Boost />
      <Footer />
    </ThemeProvider>

  )
}

export default App
