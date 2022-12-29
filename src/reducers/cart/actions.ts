import { CartItemProps } from '../../contexts/CartContext'

export enum ActionType {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  PLUS_QUANTITY_COFFEE = 'PLUS_QUANTITY_COFFEE',
  MINUS_QUANTITY_COFFEE = 'MINUS_QUANTITY_COFFEE',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export function addItemToCartAction(item: CartItemProps) {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: { item },
  }
}

export function plusQuantityCoffeeAction(quantity: number, id: number) {
  return {
    type: ActionType.PLUS_QUANTITY_COFFEE,
    payload: { quantity, id },
  }
}

export function minusQuantityCoffeeAction(quantity: number, id: number) {
  return {
    type: ActionType.MINUS_QUANTITY_COFFEE,
    payload: { quantity, id },
  }
}

export function removeItemFromCartAction(id: number) {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: { id },
  }
}
