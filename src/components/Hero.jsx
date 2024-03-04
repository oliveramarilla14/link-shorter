import { Container, Flex } from './styled/Container'
import working from '../assets/illustration-working.svg'
import { HeroText } from './styled/Header'

function Hero () {
  return (
    <Container max='1000px'>
      <Flex gap='100px' align='center'>
        <HeroText direction='column'>
          <h2>
            More than just shorter links
          </h2>
          <p>
            Build your brand's recognition and get detailed insights on how your links are performing
          </p>
          <button>Get Started</button>
        </HeroText>
        <img src={working} alt='work' width='500px' />
      </Flex>
    </Container>
  )
}

export default Hero
