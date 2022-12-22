import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AddressFormContainer,
  PurchaseFormContainer,
  PaymentFormContainer,
  BaseInputText,
  FieldsContainer,
} from './styles'

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

          <div>
            <input type="radio" id="credit" name="typePayment" value="credit" />
            <label htmlFor="credit">CARTÃO DE CRÉDITO</label>
            <input type="radio" id="debit" name="typePayment" value="debit" />
            <label htmlFor="debit">CARTÃO DE DÉBITO</label>
            <input type="radio" id="cash" name="typePayment" value="cash" />
            <label htmlFor="cash">DINHEIRO</label>
          </div>
        </PaymentFormContainer>
      </section>
    </PurchaseFormContainer>
  )
}
