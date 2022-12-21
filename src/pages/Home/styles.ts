import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShowProductsContainer = styled.div`
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .products {
    padding: 3.375rem 0;

    display: flex;
    flex-wrap: wrap;
  }
`

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

export const InputProduct = styled.input`
  max-width: 4.5rem;
  height: 2.375rem;
  margin-right: 0.5rem;
  padding: 0.5rem 0.25rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  &::placeholder {
    color: ${(props) => props.theme['base-title']};
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
