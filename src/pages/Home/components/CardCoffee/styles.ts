import styled from 'styled-components'

export const ProductContainer = styled.div`
  max-width: 16rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  margin-right: 1.5rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -50px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const TypeCoffee = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  font-size: 0.625rem;
  border-radius: 100px;
  padding: 0.5rem;
`

export const SelectProductContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;
  }

  p strong {
    font-size: 1.5rem;
    font-weight: 800;

    margin-left: 0.1rem;
    margin-right: 1.5rem;
  }
`

export const InputProduct = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  max-width: 4.5rem;
  height: 2.375rem;
  margin-right: 0.5rem;
  padding: 0.75rem 0.5rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  p {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    padding: 0 0.25rem;
  }

  .icon {
    display: flex;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['base-button']};
    border: none;
  }

  .icon:hover {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ButtonProduct = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
