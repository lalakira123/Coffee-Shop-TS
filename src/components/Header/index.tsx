import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartNavOption, HeaderContainer, LocationNavOption } from './styles'
import logoTipo from '../../assets/logoTipo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
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
          </CartNavOption>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
