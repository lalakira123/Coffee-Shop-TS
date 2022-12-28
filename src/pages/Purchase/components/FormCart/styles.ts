import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const CardCoffee = styled.div`
  display: flex;
  max-width: 23rem;
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    max-width: 4rem;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1.25rem;
  }

  .buttons {
    display: flex;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
`

const BaseProductButton = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  height: 2.375rem;
  margin-right: 0.5rem;
  padding: 0.75rem 0.5rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  p {
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

export const InputProduct = styled(BaseProductButton)`
  max-width: 4.5rem;
  p {
    font-size: 1rem;
  }
`

export const RemoveProduct = styled(BaseProductButton)`
  max-width: 5.6rem;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PriceProduct = styled.p`
  font-weight: 700;
`

export const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmButton = styled.button`
  padding: 0.75rem;
  width: 100%;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
  }
`
