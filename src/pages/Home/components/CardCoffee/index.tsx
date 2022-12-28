import {
  ButtonProduct,
  InputProduct,
  ProductContainer,
  SelectProductContainer,
  TypeCoffee,
} from './styles'
import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'

interface TagProps {
  id: number
  tagName: string
}

interface CardCoffeeProps {
  id: number
  imgCoffee: string
  name: string
  description: string
  price: number
  tags: TagProps[]
}

export function CardCoffee({
  id,
  imgCoffee,
  name,
  description,
  price,
  tags,
}: CardCoffeeProps) {
  const { addItemToCart } = useContext(CartContext)

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
    <ProductContainer key={id}>
      <img src={imgCoffee} alt="" />
      <div className="tagsCoffee">
        {tags.map((tag) => {
          return <TypeCoffee key={tag.id}>{tag.tagName}</TypeCoffee>
        })}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>

      <SelectProductContainer>
        <p>
          R$
          <strong>{price}</strong>
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
        <ButtonProduct
          onClick={(event) =>
            addItemToCart(event, {
              id,
              imgCoffee,
              name,
              price,
              quantity: quantityCoffee,
              totalPrice: Number(Number(price * quantityCoffee).toFixed(2)),
            })
          }
        >
          <ShoppingCart size={19} />
        </ButtonProduct>
      </SelectProductContainer>
    </ProductContainer>
  )
}
