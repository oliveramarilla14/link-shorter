import { Container, Flex } from './styled/Container'
import working from '../assets/illustration-working.svg'

function Hero () {
  return (
    <Container max='1000px'>
      <Flex justify='space-between' align='start'>
        <Flex direction='column'>
          <h1>
            More than just shorter links
          </h1>
          <p>
            Build your brand's recognition and get detailed insights on how your links are performing
          </p>
          <button>Get Started</button>
        </Flex>
        <img src={working} alt='work' width='300px' />
      </Flex>
    </Container>
  )
}

export default Hero
