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

const BaseFormContainer = styled.div`
  padding: 2.8rem;
  margin-bottom: 0.75rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .headerForm {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressFormContainer = styled(BaseFormContainer)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const PaymentFormContainer = styled(BaseFormContainer)`
  color: ${(props) => props.theme.purple};
`

export const FieldsContainer = styled.div`
  .customerInput {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  .optionalInput {
    display: flex;
    flex: 1;
    position: relative;
    max-width: 20.5rem;
  }

  .optionalInput span {
    position: absolute;
    top: 30px;
    right: 20px;

    font-style: italic;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const BaseInputText = styled.input`
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.875rem;
  max-width: ${(props) => props.width};
  width: 100%;
  margin-top: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const OptionsPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

interface PropsOption {
  isSelected: boolean
}

export const OptionPayment = styled.button<PropsOption>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 11rem;
  padding: 1rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border-radius: 6px;
  border: none;

  border: 1px solid
    ${(props) => (props.isSelected ? props.theme.purple : 'none')};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: pointer;
  }

  .icon {
    color: ${(props) => props.theme.purple};
  }
`

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
