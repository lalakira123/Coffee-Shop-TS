import {
  IntroduceShopContainer,
  IntroduceTitle,
  IntroduceTags,
  TagPackage,
  TagCart,
  TagTimer,
  TagCoffee,
} from './styles'

import mainImage from './../../../../assets/mainImage.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function IntroduceShop() {
  return (
    <IntroduceShopContainer>
      <div>
        <IntroduceTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroduceTitle>

        <IntroduceTags>
          <TagCart>
            <div>
              <ShoppingCart />
            </div>
            <p>Compra simples e segura</p>
          </TagCart>

          <TagPackage>
            <div>
              <Package />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </TagPackage>

          <TagTimer>
            <div>
              <Timer />
            </div>
            <p>Entrega rápida e rastreada</p>
          </TagTimer>

          <TagCoffee>
            <div>
              <Coffee />
            </div>
            <p>O café chega fresquinho até você</p>
          </TagCoffee>
        </IntroduceTags>
      </div>

      <img src={mainImage} alt="" />
    </IntroduceShopContainer>
  )
}
