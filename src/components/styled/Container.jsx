import styled from '@emotion/styled'

const Margin = styled.div({
  fontFamily: '"Poppins"',
  margin: '0 auto',
  marginTop: '20px'
}, ({ max }) => ({
  maxWidth: max
}))

const Background = styled.div(({ bgColor }) => ({
  width: '100%',
  backgroundColor: bgColor
}))

export const Flex = styled.div({
  display: 'flex'
}, ({ direction, justify, align, gap }) => ({
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  gap
}))

export function Container ({ max, bgColor, children }) {
  return (
    <Background bgColor={bgColor}>
      <Margin max={max}>
        {children}
      </Margin>
    </Background>
  )
}
