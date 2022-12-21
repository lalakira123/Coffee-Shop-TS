import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Purchase } from './pages/Purchase'
import { PurchaseMade } from './pages/PurchaseMade'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase-made" element={<PurchaseMade />} />
      </Route>
    </Routes>
  )
}
