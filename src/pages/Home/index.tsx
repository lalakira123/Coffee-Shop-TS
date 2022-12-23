import {
  ButtonProduct,
  HomeContainer,
  InputProduct,
  ProductContainer,
  SelectProductContainer,
  ShowProductsContainer,
  TypeCoffee,
} from './styles'

import { IntroduceShop } from './components/IntroduceShop'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import coffeeTradicional from './../../assets/coffee/coffeeTradicional.svg'
import { useState } from 'react'

export function Home() {
  const [quantityCoffee, setQuantityCoffee] = useState(1)

  function handlePlusQuantityCoffee() {
    setQuantityCoffee(quantityCoffee + 1)
  }

  function handleMinusQuantityCoffee() {
    if (quantityCoffee > 1) {
      setQuantityCoffee(quantityCoffee - 1)
    }
  }

  return (
    <HomeContainer>
      <IntroduceShop />

      <ShowProductsContainer>
        <h2>Nossos cafés</h2>

        <div className="products">
          <ProductContainer>
            <img src={coffeeTradicional} alt="" />
            <TypeCoffee>TRADICIONAL</TypeCoffee>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <SelectProductContainer>
              <p>
                R$
                <strong>9,90</strong>
              </p>
              <InputProduct>
                <button className="icon" onClick={handleMinusQuantityCoffee}>
                  <Minus />
                </button>
                <p>{quantityCoffee}</p>
                <button className="icon" onClick={handlePlusQuantityCoffee}>
                  <Plus />
                </button>
              </InputProduct>
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>
        </div>
      </ShowProductsContainer>
    </HomeContainer>
  )
}
