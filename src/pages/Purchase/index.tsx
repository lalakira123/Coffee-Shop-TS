import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
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
  ConfirmButton,
  ValueContainer,
} from './styles'

import coffeeTradicional from '../../assets/coffee/coffeeTradicional.svg'

export function Purchase() {
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
            <input type="radio" id="credit" name="typePayment" value="credit" />
            <label htmlFor="credit">
              <CreditCard />
              CARTÃO DE CRÉDITO
            </label>
            <input type="radio" id="debit" name="typePayment" value="debit" />
            <label htmlFor="debit">
              <Bank />
              CARTÃO DE DÉBITO
            </label>
            <input type="radio" id="cash" name="typePayment" value="cash" />
            <label htmlFor="cash">
              <Money />
              DINHEIRO
            </label>
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

              <div className="buttons">
                <input type="number" />
                <button>
                  <Trash />
                  Remover
                </button>
              </div>
            </div>

            <p>R$ 9,90</p>
          </CardCoffee>

          <CardCoffee>
            <img src={coffeeTradicional} alt="" />

            <div className="info">
              <h4>Expresso Tradicional</h4>

              <div className="buttons">
                <input type="number" />
                <button>
                  <Trash />
                  Remover
                </button>
              </div>
            </div>

            <p>R$ 9,90</p>
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
