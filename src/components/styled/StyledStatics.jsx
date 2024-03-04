import styled from '@emotion/styled'
import { Flex } from './Container'

export const StyledStatics = styled(Flex)`
flex-direction: column;
align-items:center;
padding-top:150px ;

h2{
  color: ${({ theme }) => theme.colors.neutral.DarkViolet};
  font-size: 30px;
}
p{
  color: ${({ theme }) => theme.colors.neutral.DarkBlue};
text-align: center;
width: 500px;
}
`

export const CardDash = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100%;
margin-top: 50px;
`

export const Card = styled.div`
  background-color: white;
  padding: 50px 30px;
  position: relative;

  span{
    position: absolute;
    top: -50px;
    background-color: ${({ theme }) => theme.colors.primary.Violet};
    padding: 20px;
    border-radius: 50%;
    
    img{
      width: 100%;
    }
  }

  p{
    
  }


`
