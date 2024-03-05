import styled from '@emotion/styled'
import { Flex } from './Container'

export const Header = styled.header(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  marginTop: '20px',
  marginBottom: '20px',
  ' @media (max-width: 600px)': {
    padding: '10px 20px',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0',
    width: '100%',
    backgroundColor: 'white',
    zIndex: '100',
    marginTop: '0'
  },
  img: {
    cursor: 'pointer'
  },

  nav: {
    ' @media (max-width: 600px)': {
      display: 'none'
    },
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

  @media (max-width: 600px){
    h2 {
    font-size: 35px;
  }
  }
`

export const MenuNav = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

 a {
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
}

`

export const Max = styled.div`
width: 50%;

`
