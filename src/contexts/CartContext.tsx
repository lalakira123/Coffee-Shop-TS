import React, { createContext, ReactNode, useReducer } from 'react'

import {
  addItemToCartAction,
  minusQuantityCoffeeAction,
  plusQuantityCoffeeAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

export interface CartItemProps {
  id: number
  imgCoffee: string
  name: string
  price: number
  quantity: number
  totalPrice: number
}

interface CartContextType {
  cart: CartItemProps[]
  removeItemFromCart: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void
  minusQuantityCoffee: (
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) => void
  plusQuantityCoffee: (
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) => void
  addItemToCart: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: CartItemProps,
  ) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] })

  const { cart } = cartState

  function addItemToCart(
    event: React.MouseEvent<HTMLButtonElement>,
    item: CartItemProps,
  ) {
    event.preventDefault()

    dispatch(addItemToCartAction(item))
  }

  function plusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) {
    event.preventDefault()

    dispatch(plusQuantityCoffeeAction(quantity, id))
  }

  function minusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) {
    event.preventDefault()

    dispatch(minusQuantityCoffeeAction(quantity, id))
  }

  function removeItemFromCart(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()

    dispatch(removeItemFromCartAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItemFromCart,
        minusQuantityCoffee,
        plusQuantityCoffee,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
