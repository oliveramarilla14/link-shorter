import { Container } from './styled/Container'
import { Header } from './styled/Header'
import logo from '../assets/logo.svg'

function AppBar () {
  return (
    <Container max='1000px'>
      <Header>

        <img src={logo} alt='shortly' />
        <nav>
          <a href='#'>Features</a>
          <a href='#'>Pricing</a>
          <a href='#'>Resources</a>
        </nav>
      </Header>
    </Container>
  )
}

export default AppBar
