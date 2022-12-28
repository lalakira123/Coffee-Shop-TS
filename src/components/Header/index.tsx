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

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoTipo} alt="" />
      </NavLink>

      <nav>
        <NavLink to="/purchase-made">
          <LocationNavOption href="#">
            <MapPin size={'18px'} />
            São Paulo, SP
          </LocationNavOption>
        </NavLink>
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
