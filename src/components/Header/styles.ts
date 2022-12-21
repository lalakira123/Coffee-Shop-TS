import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseNavOption = styled.a`
  border-radius: 6px;
  padding: 0.5rem;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const LocationNavOption = styled(BaseNavOption)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
`

export const CartNavOption = styled(BaseNavOption)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
