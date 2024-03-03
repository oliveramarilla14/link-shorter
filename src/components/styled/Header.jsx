import styled from '@emotion/styled'

export const Header = styled.header(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',

  nav: {
    display: 'flex',
    gap: '20px',

    a: {
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
      color: theme.colors.neutral.GrayishViolet
    }
  }
}))
