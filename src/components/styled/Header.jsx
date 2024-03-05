import styled from '@emotion/styled'
import { Flex } from './Container'

export const Header = styled.header(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  marginTop: '20px',

  nav: {
    display: 'flex',
    gap: '20px',

    a: {
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
      color: theme.colors.neutral.GrayishViolet,

      '&:hover': {
        borderBottom: `1px solid ${theme.colors.neutral.GrayishViolet}`
      },
      '&:active': {
        color: 'black'
      }
    }
  }
}))

export const HeroText = styled(Flex)`
flex:fit-content;

  h2 {
    font-size: 50px;
    margin: 0;
    line-height: 1;
    color: ${({ theme }) => theme.colors.neutral.DarkBlue};
    margin-bottom: 20px;
  }
  p{
    color: ${({ theme }) => theme.colors.neutral.GrayishViolet};
    margin-bottom: 20px;
  }
  button{
    color: white;
    cursor: pointer;
    border: none;
    padding: 15px 30px;
    width: fit-content;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.Cyan};

    &:active {
        transform:scale(0.9);
      }
  }
`
