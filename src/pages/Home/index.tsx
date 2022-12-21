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
import { ShoppingCart } from 'phosphor-react'

import coffeeTradicional from './../../assets/coffee/coffeeTradicional.svg'

export function Home() {
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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
              <ButtonProduct>
                <ShoppingCart size={19} />
              </ButtonProduct>
            </SelectProductContainer>
          </ProductContainer>

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
              <InputProduct type="number" min="1" placeholder="1" />
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
