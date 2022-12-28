import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { Router } from './Router'
import { PurchaseContextProvider } from './contexts/PurchaseContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PurchaseContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </PurchaseContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
