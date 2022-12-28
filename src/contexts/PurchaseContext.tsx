import { createContext, ReactNode, useState } from 'react'

import { CartItemProps } from './CartContext'

interface AddressProps {
  cep: string
  rua: string
  numero: string
  complemento?: string | null
  bairro: string
  cidade: string
  uf: string
}

interface Purchase {
  cart: CartItemProps[]
  total: number
  address: AddressProps
  typePayment: string
}

interface PurchaseType {
  purchase: Purchase
  makePurchase: (
    address: AddressProps,
    cart: CartItemProps[],
    typePayment: string,
  ) => void
}

export const PurchaseContext = createContext({} as PurchaseType)

interface PurchaseContextProviderProps {
  children: ReactNode
}

export function PurchaseContextProvider({
  children,
}: PurchaseContextProviderProps) {
  const [purchase, setPurchase] = useState<Purchase>({
    cart: [],
    total: 0,
    address: { bairro: '', cep: '', cidade: '', numero: '', rua: '', uf: '' },
    typePayment: '',
  })

  function makePurchase(
    address: AddressProps,
    cart: CartItemProps[],
    typePayment: string,
  ) {
    const total = cart
      .reduce((accumulator, { totalPrice }) => accumulator + totalPrice, 0)
      .toFixed(2)

    const totalAndTax = total + 3.5

    setPurchase({
      ...purchase,
      address,
      cart,
      typePayment,
      total: Number(Number(totalAndTax).toFixed(2)),
    })
  }

  return (
    <PurchaseContext.Provider value={{ purchase, makePurchase }}>
      {children}
    </PurchaseContext.Provider>
  )
}
