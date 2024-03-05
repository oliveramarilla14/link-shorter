import styled from '@emotion/styled'

export const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  color: white;
  padding: 40px 0;
`

export const Column = styled.div`

ul{
  margin: 10px 0;
  li{
    margin: 10px 0;
    list-style: none;
    color: ${({ theme }) => theme.colors.neutral.GrayishViolet};
    cursor: pointer;

    &:hover{
    color:${({ theme }) => theme.colors.primary.Cyan};
    }
  }

  ${({ img }) => img && `
  display:flex;
  gap: 20px
  `}
}



`
