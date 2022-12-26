import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

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

import coffeeTradicional from './../../assets/coffee/coffeeTradicional.svg'
import coffeeCremoso from './../../assets/coffee/coffeeCremoso.svg'
import coffeeAmericano from './../../assets/coffee/coffeeAmericano.svg'

interface TagProps {
  id: number
  tagName: string
}

interface CoffeeProps {
  id: number
  imgCoffee: string
  tags: TagProps[]
  name: string
  description: string
  price: number
}

export function Home() {
  const coffeeList: CoffeeProps[] = [
    {
      id: 1,
      imgCoffee: coffeeTradicional,
      tags: [{ id: 1, tagName: 'TRADICIONAL' }],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      imgCoffee: coffeeAmericano,
      tags: [{ id: 1, tagName: 'TRADICIONAL' }],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 6.9,
    },
    {
      id: 3,
      imgCoffee: coffeeCremoso,
      tags: [
        { id: 1, tagName: 'ESPECIAL' },
        { id: 2, tagName: 'COM LEITE' },
      ],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 12.9,
    },
  ]

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
          {coffeeList.map((coffee) => {
            return (
              <ProductContainer key={coffee.id}>
                <img src={coffee.imgCoffee} alt="" />
                <div className="tagsCoffee">
                  {coffee.tags.map((tag) => {
                    return <TypeCoffee key={tag.id}>{tag.tagName}</TypeCoffee>
                  })}
                </div>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>

                <SelectProductContainer>
                  <p>
                    R$
                    <strong>{coffee.price}</strong>
                  </p>
                  <InputProduct>
                    <button
                      className="icon"
                      onClick={handleMinusQuantityCoffee}
                    >
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
            )
          })}
        </div>
      </ShowProductsContainer>
    </HomeContainer>
  )
}
