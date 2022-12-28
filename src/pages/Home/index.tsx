import { HomeContainer, ShowProductsContainer } from './styles'

import { IntroduceShop } from './components/IntroduceShop'

import coffeeAmericano from './../../assets/coffee/coffeeAmericano.svg'
import coffeeArabe from './../../assets/coffee/coffeeArabe.svg'
import coffeeCapuccino from './../../assets/coffee/coffeeCapuccino.svg'
import coffeeChocolate from './../../assets/coffee/coffeeChocolate.svg'
import coffeeCremoso from './../../assets/coffee/coffeeCremoso.svg'
import coffeeCubano from './../../assets/coffee/coffeeCubano.svg'
import coffeeGelado from './../../assets/coffee/coffeeGelado.svg'
import coffeeHavaiano from './../../assets/coffee/coffeeHavaiano.svg'
import coffeeIrlandes from './../../assets/coffee/coffeeIrlandes.svg'
import coffeeLatte from './../../assets/coffee/coffeeLatte.svg'
import coffeeLeite from './../../assets/coffee/coffeeLeite.svg'
import coffeeMacchiato from './../../assets/coffee/coffeeMacchiato.svg'
import coffeeMocaccino from './../../assets/coffee/coffeeMocaccino.svg'
import coffeeTradicional from './../../assets/coffee/coffeeTradicional.svg'

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
    tags: [{ id: 1, tagName: 'TRADICIONAL' }],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.9,
  },
  {
    id: 4,
    imgCoffee: coffeeGelado,
    tags: [
      { id: 1, tagName: 'TRADICIONAL' },
      { id: 2, tagName: 'GELADO' },
    ],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.9,
  },
  {
    id: 5,
    imgCoffee: coffeeLeite,
    tags: [
      { id: 1, tagName: 'TRADICIONAL' },
      { id: 2, tagName: 'COM LEITE' },
    ],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 13.9,
  },
  {
    id: 6,
    imgCoffee: coffeeLatte,
    tags: [
      { id: 1, tagName: 'TRADICIONAL' },
      { id: 2, tagName: 'COM LEITE' },
    ],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 15.9,
  },
  {
    id: 7,
    imgCoffee: coffeeCapuccino,
    tags: [
      { id: 1, tagName: 'TRADICIONAL' },
      { id: 2, tagName: 'COM LEITE' },
    ],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 18.9,
  },
  {
    id: 8,
    imgCoffee: coffeeMacchiato,
    tags: [
      { id: 1, tagName: 'TRADICIONAL' },
      { id: 2, tagName: 'COM LEITE' },
    ],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 19.9,
  },
  {
    id: 9,
    imgCoffee: coffeeMocaccino,
    tags: [
      { id: 1, tagName: 'TRADICIONAL' },
      { id: 2, tagName: 'COM LEITE' },
    ],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 19.9,
  },
  {
    id: 10,
    imgCoffee: coffeeChocolate,
    tags: [
      { id: 1, tagName: 'ESPECIAL' },
      { id: 2, tagName: 'COM LEITE' },
    ],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 14.9,
  },
  {
    id: 11,
    imgCoffee: coffeeCubano,
    tags: [
      { id: 1, tagName: 'ESPECIAL' },
      { id: 2, tagName: 'ALCOÓLICO' },
      { id: 3, tagName: 'GELADO' },
    ],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 29.9,
  },
  {
    id: 12,
    imgCoffee: coffeeHavaiano,
    tags: [{ id: 1, tagName: 'ESPECIAL' }],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 21.9,
  },
  {
    id: 13,
    imgCoffee: coffeeArabe,
    tags: [{ id: 1, tagName: 'ESPECIAL' }],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 21.9,
  },
  {
    id: 14,
    imgCoffee: coffeeIrlandes,
    tags: [
      { id: 1, tagName: 'ESPECIAL' },
      { id: 2, tagName: 'ALCOÓLICO' },
    ],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 31.9,
  },
]

export function Home() {
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
