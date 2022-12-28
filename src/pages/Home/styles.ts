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

    .tagsCoffee {
      display: flex;
      gap: 0.25rem;
    }
  }
`
