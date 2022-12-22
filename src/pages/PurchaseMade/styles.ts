import styled from 'styled-components'

export const PurchaseMadeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 30rem;
  gap: 6rem;
  padding: 5rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxInfoDeliveryContainer = styled.div`
  margin-top: 2.75rem;
  padding: 2.75rem;

  background: linear-gradient(to right, #dbac2c, #8047f8);
  border-radius: 6px 44px;
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  & + & {
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`

const Tag = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  color: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TagLocation = styled(Tag)`
  background-color: ${(props) => props.theme.purple};
`

export const TagTimer = styled(Tag)`
  background-color: ${(props) => props.theme.yellow};
`

export const TagMoney = styled(Tag)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
