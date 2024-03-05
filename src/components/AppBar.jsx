import { Container } from './styled/Container'
import { Header, MenuNav } from './styled/Header'
import logo from '../assets/logo.svg'
import MediaQuery from 'react-responsive'
import menu from '../assets/menu.svg'
import { useState } from 'react'

function AppBar () {
  const [showNav, setShowNav] = useState(false)
  return (
    <Container max='1000px'>
      <Header>

        <img src={logo} alt='shortly' />
        <MediaQuery maxWidth='600px'>
          <img src={menu} onClick={() => setShowNav(!showNav)} />
          {showNav &&
            <MenuNav>
              <a href='#'>Features</a>
              <a href='#'>Pricing</a>
              <a href='#'>Resources</a>
            </MenuNav>}
        </MediaQuery>
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
