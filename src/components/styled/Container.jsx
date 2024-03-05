import styled from '@emotion/styled'

const Margin = styled.div({
  fontFamily: '"Poppins"',
  margin: '0 auto'
}, ({ max }) => ({
  maxWidth: max
}))

const Background = styled.div(({ bgColor, transform }) => ({
  width: '100%',
  backgroundColor: bgColor,
  transform
}))

export const Flex = styled.div({
  display: 'flex'
}, ({ direction, justify, align, gap }) => ({
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  gap,
  '& > div': {
    width: '50%',
    '& > img': {
      width: '100%',
      marginTop: '70px'
    }
  },
  ' @media (max-width: 600px)': {
    flexDirection: 'column'
  }

}))

export function Container ({ max, bgColor, children, transform }) {
  return (
    <Background bgColor={bgColor} transform={transform}>
      <Margin max={max}>
        {children}
      </Margin>
    </Background>
  )
}
