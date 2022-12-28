import { HomeContainer, ShowProductsContainer } from './styles'

import { IntroduceShop } from './components/IntroduceShop'

import coffeeTradicional from './../../assets/coffee/coffeeTradicional.svg'
import coffeeCremoso from './../../assets/coffee/coffeeCremoso.svg'
import coffeeAmericano from './../../assets/coffee/coffeeAmericano.svg'
import { CardCoffee } from './components/CardCoffee'

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

  return (
    <HomeContainer>
      <IntroduceShop />

      <ShowProductsContainer>
        <h2>Nossos cafés</h2>

        <div className="products">
          {coffeeList.map((coffee) => {
            return (
              <CardCoffee
                key={coffee.id}
                id={coffee.id}
                description={coffee.description}
                price={coffee.price}
                imgCoffee={coffee.imgCoffee}
                name={coffee.name}
                tags={coffee.tags}
              />
            )
          })}
        </div>
      </ShowProductsContainer>
    </HomeContainer>
  )
}
