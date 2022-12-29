import { produce } from 'immer'

import { CartItemProps } from '../../contexts/CartContext'
import { ActionType } from './actions'

interface CartState {
  cart: CartItemProps[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART: {
      const alreadyHasAtCart = state.cart.find((coffee) => {
        return coffee.id === action.payload.item.id
      })

      if (alreadyHasAtCart) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart.push(action.payload.item)
      })
    }

    case ActionType.MINUS_QUANTITY_COFFEE: {
      const currentCartIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id
      })

      if (currentCartIndex < 0 || action.payload.quantity <= 1) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart[currentCartIndex].quantity = action.payload.quantity - 1
        draft.cart[currentCartIndex].totalPrice = Number(
          (
            (action.payload.quantity - 1) *
            state.cart[currentCartIndex].price
          ).toFixed(2),
        )
      })
    }

    case ActionType.PLUS_QUANTITY_COFFEE: {
      const currentCartIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id
      })

      if (currentCartIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart[currentCartIndex].quantity = action.payload.quantity + 1
        draft.cart[currentCartIndex].totalPrice = Number(
          (
            (action.payload.quantity + 1) *
            state.cart[currentCartIndex].price
          ).toFixed(2),
        )
      })
    }

    case ActionType.REMOVE_ITEM_FROM_CART: {
      const removedItem = state.cart.filter((item) => {
        return item.id !== action.payload.id
      })

      return produce(state, (draft) => {
        draft.cart = removedItem
      })
    }

    default: {
      return state
    }
  }
}
