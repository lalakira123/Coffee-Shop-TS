import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  CartNavOption,
  HeaderContainer,
  LocationNavOption,
  FullCart,
} from './styles'
import logoTipo from '../../assets/logoTipo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { PurchaseContext } from '../../contexts/PurchaseContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const { purchase } = useContext(PurchaseContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoTipo} alt="" />
      </NavLink>

      <nav>
        {purchase.typePayment ? (
          <NavLink to="/purchase-made">
            <LocationNavOption href="#">
              <MapPin size={'18px'} />
              {purchase.address.cidade}, {purchase.address.uf}
            </LocationNavOption>
          </NavLink>
        ) : (
          <></>
        )}
        <NavLink to="/purchase">
          <CartNavOption href="#">
            <ShoppingCart size={'18px'} />
            {cart.length > 0 ? <FullCart>{cart.length}</FullCart> : <></>}
          </CartNavOption>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
