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

  position: relative;
`

export const FullCart = styled.div`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;

  position: absolute;
  right: -8px;
  top: -8px;
`
