import { Container } from './styled/Container'
import { StyledShorter } from './styled/StyledShorter'

function Shorter () {
  return (
    <Container max='800px'>
      <StyledShorter>
        <input type='text' placeholder='Shorten a link here...' />
        <button>Shorten It!</button>
      </StyledShorter>
    </Container>
  )
}

export default Shorter
