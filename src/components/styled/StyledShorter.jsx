import styled from '@emotion/styled'
import { Flex } from './Container'
import bgImage from '../../assets/bg-shorten-desktop.svg'

export const StyledShorter = styled(Flex)`
  background-image: url(${bgImage}) ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.primary.Violet};
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius:10px;
  padding: 20px;

  small{
    color: ${({ theme }) => theme.colors.secondary.Red};
    position: absolute;
    bottom: 2px;
  }

  
  input{
    padding: 10px 10px;
    border: none;
    font-size: 18px;
    width: 100%;
    outline: none;
    border-radius: 5px;
   
    ${({ empty }) => empty && 'border: 2px solid hsl(0, 87%, 67%)'}
    }


  button{
    cursor:pointer;
    color: white;
    border: none;
    padding: 10px 20px;
    width:200px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.Cyan};
    &:active {
        transform:scale(0.9);
      }
  }
`
export const Short = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;

  a{
    color: ${({ theme }) => theme.colors.primary.Cyan};
    margin-right:20px;
  }

`
export const CopyBtn = styled.button`
    cursor:pointer;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.Cyan};
    &:active {
        transform:scale(0.9);
      }
`

export const CopiedBtn = styled.button`
    cursor:pointer;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.Violet};
`
