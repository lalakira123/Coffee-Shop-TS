import { useContext } from 'react'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BoxInfoDeliveryContainer,
  PurchaseMadeContainer,
  TagLocation,
  TagTimer,
  TagMoney,
  TagContainer,
} from './styles'

import delivery from './../../assets/delivery.svg'
import { PurchaseContext } from '../../contexts/PurchaseContext'

export function PurchaseMade() {
  const { purchase } = useContext(PurchaseContext)

  return (
    <PurchaseMadeContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <BoxInfoDeliveryContainer>
          <TagContainer>
            <TagLocation>
              <MapPin />
            </TagLocation>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {purchase.address.rua}, {purchase.address.numero}
                </strong>
              </p>
              <p>
                {purchase.address.bairro} - {purchase.address.cidade},{' '}
                {purchase.address.uf}
              </p>
            </div>
          </TagContainer>

          <TagContainer>
            <TagTimer>
              <Timer />
            </TagTimer>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </TagContainer>

          <TagContainer>
            <TagMoney>
              <CurrencyDollar />
            </TagMoney>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>
                  {purchase.typePayment === 'credit' ? 'Cartão de Crédito' : ''}
                  {purchase.typePayment === 'debit' ? 'Cartão de Débito' : ''}
                  {purchase.typePayment === 'cash' ? 'Dinheiro' : ''}
                </strong>
              </p>
            </div>
          </TagContainer>
        </BoxInfoDeliveryContainer>
      </div>

      <img src={delivery} alt="" />
    </PurchaseMadeContainer>
  )
}
