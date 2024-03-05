import { useRef, useState } from 'react'
import { Container } from './styled/Container'
import { CopiedBtn, CopyBtn, Short, StyledShorter } from './styled/StyledShorter'

function Shorter () {
  const [shortLink, setShortLink] = useState(false)
  const [copied, setCopied] = useState(false)
  const [empty, setEmpty] = useState(false)
  const linkToShort = useRef()

  const shortener = (text) => {
    try {
      fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer aba5415dda791e0a1ee0e4263b829befc51adacc',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ long_url: text })
      })
        .then(res => res.json())
        .then(json => {
          if (json.errors) {
            setEmpty(true)
            return
          }
          setShortLink({
            large: linkToShort.current.value,
            shorted: json.link
          })
          linkToShort.current.value = ''
        })
    } catch (error) {

    }
  }

  const handleShort = () => {
    if (linkToShort.current.value) {
      setEmpty(false)
      setCopied(false)
      shortener(linkToShort.current.value)
    } else {
      (
        setEmpty(true)
      )
    }
  }
  const handleCopy = () => {
    copyToClipboard(shortLink.shorted)
    setCopied(true)
  }

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text)
  }
  return (
    <Container max='800px' transform='translateY(50%)'>
      <StyledShorter empty={empty}>
        <input ref={linkToShort} type='text' placeholder='Shorten a link here...' />
        <button onClick={handleShort}>Shorten It!</button>
        {empty && <small>Please add a valid link</small>}
      </StyledShorter>
      {
        shortLink &&
          <Short>
            <p>{shortLink.large}</p>
            <div>
              <a href={shortLink.shorted}>{shortLink.shorted}</a>
              {
                copied
                  ? <CopiedBtn>Copied!</CopiedBtn>
                  : <CopyBtn onClick={handleCopy}>Copy</CopyBtn>

              }
            </div>
          </Short>
      }

    </Container>
  )
}

export default Shorter
