import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
