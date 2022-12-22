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

export function PurchaseMade() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </TagContainer>
        </BoxInfoDeliveryContainer>
      </div>

      <img src={delivery} alt="" />
    </PurchaseMadeContainer>
  )
}
