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

export const AddressFormContainer = styled(BaseFormContainer)`
  color: ${(props) => props.theme['yellow-dark']};
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
