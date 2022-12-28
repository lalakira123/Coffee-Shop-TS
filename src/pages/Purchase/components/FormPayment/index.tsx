import { MouseEvent, useState } from 'react'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentFormContainer,
  OptionsPaymentContainer,
  OptionPayment,
} from './styles'

export function FormPayment() {
  const [selectPayment, setSelectPayment] = useState<
    'cash' | 'debit' | 'credit' | ''
  >('')

  function handleSelectPayment(
    event: MouseEvent<HTMLButtonElement>,
    type: 'cash' | 'debit' | 'credit',
  ) {
    event.preventDefault()

    if (type !== selectPayment) {
      setSelectPayment(type)
    }
  }

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
  )
}
