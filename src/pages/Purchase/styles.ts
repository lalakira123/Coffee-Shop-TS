import styled from 'styled-components'

export const PurchaseFormContainer = styled.form`
  padding: 2.5rem 0;

  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    margin-bottom: 0.9rem;
  }
`
