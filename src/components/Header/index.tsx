import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartNavOption, HeaderContainer, LocationNavOption } from './styles'
import logoTipo from '../../assets/logoTipo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTipo} alt="" />

      <nav>
        <LocationNavOption href="#">
          <MapPin size={'18px'}/>
          São Paulo, SP
        </LocationNavOption>
        <CartNavOption href="#">
          <ShoppingCart size={'18px'}/>
        </CartNavOption>
      </nav>
    </HeaderContainer>
  )
}
