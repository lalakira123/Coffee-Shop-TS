import React, { useState } from 'react'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
  Minus,
  Plus,
} from 'phosphor-react'
import {
  AddressFormContainer,
  PurchaseFormContainer,
  PaymentFormContainer,
  BaseInputText,
  FieldsContainer,
  OptionsPaymentContainer,
  SelectedCoffeeContainer,
  CardCoffee,
  ButtonsContainer,
  InputProduct,
  RemoveProduct,
  PriceProduct,
  ConfirmButton,
  ValueContainer,
  OptionPayment,
} from './styles'

import coffeeTradicional from '../../assets/coffee/coffeeTradicional.svg'

export function Purchase() {
  const [quantityCoffee, setQuantityCoffee] = useState(1)
  const [selectPayment, setSelectPayment] = useState<
    'cash' | 'debit' | 'credit' | ''
  >('')

  function handlePlusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()
    setQuantityCoffee(quantityCoffee + 1)
  }

  function handleMinusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()
    if (quantityCoffee > 1) {
      setQuantityCoffee(quantityCoffee - 1)
    }
  }

  function handleSelectPayment(
    event: React.MouseEvent<HTMLButtonElement>,
    type: 'cash' | 'debit' | 'credit',
  ) {
    event.preventDefault()

    if (type !== selectPayment) {
      setSelectPayment(type)
    }
  }
  console.log(selectPayment)
  const isCredit = selectPayment === 'credit'
  const isDebit = selectPayment === 'debit'
  const isCash = selectPayment === 'cash'

  return (
    <PurchaseFormContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <AddressFormContainer>
          <div className="headerForm">
            <MapPinLine />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <FieldsContainer>
            <BaseInputText placeholder="CEP" width={'200px'} />
            <BaseInputText placeholder="Rua" width={'560px'} />
            <div className="customerInput">
              <BaseInputText placeholder="Número" width={'200px'} />
              <div className="optionalInput">
                <BaseInputText placeholder="Complemento" width={'368px'} />
                <span>Opcional</span>
              </div>
            </div>
            <div className="customerInput">
              <BaseInputText placeholder="Bairro" width={'200px'} />
              <BaseInputText placeholder="Cidade" width={'276px'} />
              <BaseInputText placeholder="UF" width={'60px'} />
            </div>
          </FieldsContainer>
        </AddressFormContainer>

        <PaymentFormContainer>
          <div className="headerForm">
            <CurrencyDollar />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <OptionsPaymentContainer>
            <OptionPayment
              onClick={(event) => handleSelectPayment(event, 'credit')}
              isSelected={isCredit}
            >
              <CreditCard className="icon" />
              CARTÃO DE CRÉDITO
            </OptionPayment>
            <OptionPayment
              onClick={(event) => handleSelectPayment(event, 'debit')}
              isSelected={isDebit}
            >
              <Bank className="icon" />
              CARTÃO DE DÉBITO
            </OptionPayment>
            <OptionPayment
              onClick={(event) => handleSelectPayment(event, 'cash')}
              isSelected={isCash}
            >
              <Money className="icon" />
              DINHEIRO
            </OptionPayment>
          </OptionsPaymentContainer>
        </PaymentFormContainer>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <SelectedCoffeeContainer>
          <CardCoffee>
            <img src={coffeeTradicional} alt="" />

            <div className="info">
              <h4>Expresso Tradicional</h4>

              <ButtonsContainer>
                <InputProduct>
                  <button className="icon" onClick={handleMinusQuantityCoffee}>
                    <Minus />
                  </button>
                  <p>{quantityCoffee}</p>
                  <button className="icon" onClick={handlePlusQuantityCoffee}>
                    <Plus />
                  </button>
                </InputProduct>
                <RemoveProduct>
                  <button className="icon">
                    <Trash />
                    <p>REMOVER</p>
                  </button>
                </RemoveProduct>
              </ButtonsContainer>
            </div>

            <PriceProduct>R$9,90</PriceProduct>
          </CardCoffee>

          <ValueContainer>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ValueContainer>
          <ValueContainer>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </ValueContainer>
          <ValueContainer>
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>R$ 33,20</strong>
            </p>
          </ValueContainer>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </SelectedCoffeeContainer>
      </section>
    </PurchaseFormContainer>
  )
}
