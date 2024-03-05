import styled from '@emotion/styled'
import { Flex } from './Container'
import bgDesktop from '../../assets/bg-boost-desktop.svg'

export const StyledBoost = styled(Flex)`
  background-image: url(${bgDesktop});
  background-size: cover;
  padding: 50px 0;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.Violet};

  h3{
    color: white;
    margin-bottom: 10px;
    font-size: 30px;
  }

  button{
    &:active {
        transform:scale(0.9);
      }
    cursor:pointer;
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.Cyan};
  }
`
