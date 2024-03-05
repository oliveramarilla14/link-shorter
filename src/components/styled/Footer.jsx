import { Column, StyledFooter } from './StyledFooter'
import { Container } from './Container'
import { useTheme } from '@emotion/react'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import pinterest from '../../assets/icon-pinterest.svg'
import Logo from '../../assets/Logo'

function Footer () {
  const theme = useTheme()
  return (
    <Container max='1000px' bgColor={theme.colors.neutral.DarkViolet}>
      <StyledFooter>
        <Column>
          <Logo color='#fff' />
        </Column>
        <Column>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </Column>
        <Column>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </Column>
        <Column>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </Column>
        <Column img>
          <ul>
            <li><img src={facebook} alt='' /></li>
            <li><img src={twitter} alt='' /></li>
            <li><img src={pinterest} alt='' /></li>
            <li><img src={instagram} alt='' /></li>
          </ul>
        </Column>
      </StyledFooter>
    </Container>
  )
}

export default Footer
