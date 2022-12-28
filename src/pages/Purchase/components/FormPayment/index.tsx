import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { SelectPaymentContext } from '../../../../contexts/SelectPaymentContext'
import {
  PaymentFormContainer,
  OptionsPaymentContainer,
  OptionPayment,
} from './styles'

export function FormPayment() {
  const { selectPayment, changeSelectPayment } =
    useContext(SelectPaymentContext)

  const isCredit = selectPayment === 'credit'
  const isDebit = selectPayment === 'debit'
  const isCash = selectPayment === 'cash'

  return (
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
          onClick={(event) => changeSelectPayment(event, 'credit')}
          isSelected={isCredit}
        >
          <CreditCard className="icon" />
          CARTÃO DE CRÉDITO
        </OptionPayment>
        <OptionPayment
          onClick={(event) => changeSelectPayment(event, 'debit')}
          isSelected={isDebit}
        >
          <Bank className="icon" />
          CARTÃO DE DÉBITO
        </OptionPayment>
        <OptionPayment
          onClick={(event) => changeSelectPayment(event, 'cash')}
          isSelected={isCash}
        >
          <Money className="icon" />
          DINHEIRO
        </OptionPayment>
      </OptionsPaymentContainer>
    </PaymentFormContainer>
  )
}
