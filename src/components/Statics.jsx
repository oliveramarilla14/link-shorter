import { useTheme } from '@emotion/react'
import { Container } from './styled/Container'
import { Card, CardDash, StyledStatics } from './styled/StyledStatics'
import brandRecognition from '../assets/icon-brand-recognition.svg'

function Statics () {
  const theme = useTheme()
  return (
    <Container bgColor={theme.colors.neutral.Gray} max='1000px'>
      <StyledStatics>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

        <CardDash>
          <Card>
            <span>
              <img src={brandRecognition} alt='' />
            </span>
            <h3>Brand Recognition</h3>
            <p>Boost Your branch recognition with each click. Generic links does not mean a thing. Branded links help instill confidence in your content</p>
          </Card>

          <Card>
            <span>
              <img src={brandRecognition} alt='' />
            </span>
            <h3>Brand Recognition</h3>
            <p>Boost Your branch recognition with each click. Generic links does not mean a thing. Branded links help instill confidence in your content</p>
          </Card>

          <Card>
            <span>
              <img src={brandRecognition} alt='' />
            </span>
            <h3>Brand Recognition</h3>
            <p>Boost Your branch recognition with each click. Generic links does not mean a thing. Branded links help instill confidence in your content</p>
          </Card>
        </CardDash>
      </StyledStatics>

    </Container>
  )
}

export default Statics
