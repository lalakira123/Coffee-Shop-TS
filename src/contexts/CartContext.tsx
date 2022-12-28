import React, { createContext, ReactNode, useState } from 'react'

interface CartItemProps {
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
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([])

  function plusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) {
    event.preventDefault()

    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity + 1,
          totalPrice: Number(((quantity + 1) * item.price).toFixed(2)),
        }
      }

      return item
    })

    setCart(newCart)
  }

  function minusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) {
    event.preventDefault()

    const newCart = cart.map((item) => {
      if (item.id === id && quantity > 1) {
        return {
          ...item,
          quantity: quantity - 1,
          totalPrice: Number(((quantity - 1) * item.price).toFixed(2)),
        }
      }

      return item
    })

    setCart(newCart)
  }

  function removeItemFromCart(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()

    const newCart = cart.filter((item) => {
      return item.id !== id
    })

    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItemFromCart,
        minusQuantityCoffee,
        plusQuantityCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
