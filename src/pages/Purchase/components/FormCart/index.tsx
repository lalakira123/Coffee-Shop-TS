import { useEffect, useState, useContext } from 'react'

import { Trash, Minus, Plus } from 'phosphor-react'
import {
  SelectedCoffeeContainer,
  CardCoffee,
  ButtonsContainer,
  InputProduct,
  RemoveProduct,
  PriceProduct,
  ConfirmButton,
  ValueContainer,
  EmptyCart,
} from './styles'

import { CartContext } from '../../../../contexts/CartContext'
import { useFormContext } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { SelectPaymentContext } from '../../../../contexts/SelectPaymentContext'

export function FormCart() {
  const { cart, minusQuantityCoffee, plusQuantityCoffee, removeItemFromCart } =
    useContext(CartContext)
  const { selectPayment } = useContext(SelectPaymentContext)
  const [totalItem, setTotalItem] = useState(0)

  useEffect(() => {
    const totalValue = cart
      .reduce((accumulator, { totalPrice }) => accumulator + totalPrice, 0)
      .toFixed(2)

    setTotalItem(Number(totalValue))
  }, [cart])

  const { watch } = useFormContext()
  const watchAllFields = watch()
  const { rua, cidade, numero, bairro, uf, cep } = watchAllFields

  const isDisableSubmit =
    !rua || !cidade || !numero || !bairro || !uf || !cep || !selectPayment

  const deliveryTax = 3.5

  return (
    <SelectedCoffeeContainer>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => {
            return (
              <CardCoffee key={item.id}>
                <img src={item.imgCoffee} alt="" />

                <div className="info">
                  <h4>{item.name}</h4>

                  <ButtonsContainer>
                    <InputProduct>
                      <button
                        className="icon"
                        onClick={(event) =>
                          minusQuantityCoffee(event, item.quantity, item.id)
                        }
                      >
                        <Minus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="icon"
                        onClick={(event) =>
                          plusQuantityCoffee(event, item.quantity, item.id)
                        }
                      >
                        <Plus />
                      </button>
                    </InputProduct>
                    <RemoveProduct>
                      <button
                        className="icon"
                        onClick={(event) => removeItemFromCart(event, item.id)}
                      >
                        <Trash />
                        <p>REMOVER</p>
                      </button>
                    </RemoveProduct>
                  </ButtonsContainer>
                </div>

                <PriceProduct>R${item.totalPrice}</PriceProduct>
              </CardCoffee>
            )
          })}

          <ValueContainer>
            <p>Total de itens</p>
            <p>R$ {totalItem}</p>
          </ValueContainer>
          <ValueContainer>
            <p>Entrega</p>
            <p>R$ {deliveryTax}</p>
          </ValueContainer>
          <ValueContainer>
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>R$ {deliveryTax + totalItem}</strong>
            </p>
          </ValueContainer>
          <ConfirmButton type="submit" disabled={isDisableSubmit}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </>
      ) : (
        <EmptyCart>
          <NavLink to="/">Adicione Itens Ao Carrinho</NavLink>
        </EmptyCart>
      )}
    </SelectedCoffeeContainer>
  )
}
