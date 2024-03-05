import { Container, Flex } from './styled/Container'
import working from '../assets/illustration-working.svg'
import { HeroText, Max } from './styled/Header'
import MediaQuery, { useMediaQuery } from 'react-responsive'

function Hero () {
  const max600 = useMediaQuery({ query: '(max-width: 600px)' })
  return (
    <Container max='1000px'>
      <Flex gap={max600 ? '30px' : '100px'} align='center'>
        <MediaQuery maxWidth='600px'>
          <div>
            <img src={working} alt='work' />
          </div>
        </MediaQuery>
        <HeroText direction='column'>
          <h2>
            More than just shorter links
          </h2>
          <p>
            Build your brand's recognition and get detailed insights on how your links are performing
          </p>
          <button>Get Started</button>
        </HeroText>
        <MediaQuery minWidth='600px'>
          <Max>
            <img src={working} alt='work' />
          </Max>
        </MediaQuery>
      </Flex>
    </Container>
  )
}

export default Hero
