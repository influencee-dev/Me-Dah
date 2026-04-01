/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Convenzioni } from "./pages/Convenzioni"
import { CartProvider } from "./context/CartContext"

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="convenzioni" element={<Convenzioni />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  )
}

