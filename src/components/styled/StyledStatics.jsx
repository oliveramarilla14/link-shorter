import styled from '@emotion/styled'
import { Flex } from './Container'

export const StyledStatics = styled(Flex)`
flex-direction: column;
align-items:center;
padding: 150px 0;

h2{
  color: ${({ theme }) => theme.colors.neutral.DarkViolet};
  font-size: 30px;
}
p{
  color: ${({ theme }) => theme.colors.neutral.DarkBlue};
text-align: center;
}
`

export const CardDash = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  position: relative;

  @media (max-width: 600px) {
    grid-template-columns: 1fr ;
    margin-top :70px ;
  }

  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 60%;
    width: 100%;
    height: 8px;

    background-color:${({ theme }) => theme.colors.primary.Cyan} ;
    @media (max-width: 600px){
    left: 50%;
    top: 0;
    width: 8px;
    height: 100%;
    }
  }
`

export const Card = styled.div`
  background-color: white;
  padding: 50px 30px 20px;
  position: relative;

  &:nth-child(2){
    transform: translateY(50px);
  }
  &:nth-child(3){
    transform: translateY(100px);
  }

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
    width: auto;
    text-align: start;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.neutral.GrayishViolet};
  }

  @media (max-width: 600px){
    margin: 0 20px;
    }

`
