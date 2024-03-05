import { useRef, useState } from 'react'
import { Container } from './styled/Container'
import { Short, StyledShorter } from './styled/StyledShorter'

function Shorter () {
  const [shortLink, setShortLink] = useState(false)
  // const [copied, setCopied] = useState(false)
  const linkToShort = useRef()

  const handleShort = () => {
    if (linkToShort.current.value) {
      setShortLink({
        large: linkToShort.current.value,
        shorted: linkToShort.current.value
      })
    }
  }
  const handleCopy = () => {
    copyToClipboard(shortLink.shorted)
  }

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text)
  }
  return (
    <Container max='800px' transform='translateY(50%)'>
      <StyledShorter>
        <input ref={linkToShort} type='text' placeholder='Shorten a link here...' />
        <button onClick={handleShort}>Shorten It!</button>
      </StyledShorter>
      {
        shortLink &&
          <Short>
            <p>{shortLink.large}</p>
            <div>
              <a href={shortLink.shorted}>{shortLink.shorted}</a>
              <button onClick={handleCopy}>Copy</button>
            </div>
          </Short>
      }

    </Container>
  )
}

export default Shorter
