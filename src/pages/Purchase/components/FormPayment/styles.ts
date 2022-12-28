import styled from 'styled-components'

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

export const PaymentFormContainer = styled(BaseFormContainer)`
  color: ${(props) => props.theme.purple};
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
