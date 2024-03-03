import styled from '@emotion/styled'

export const Margin = styled.div({
  fontFamily: '"Poppins"',
  margin: 'auto'
}, ({ max }) => ({
  maxWidth: max
}))

const Background = styled.div(({ bgColor }) => ({
  backgroundColor: bgColor
}))

export const Flex = styled.div({
  display: 'flex'
}, ({ direction, justify, align }) => ({
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align
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
