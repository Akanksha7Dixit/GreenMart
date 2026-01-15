import React from 'react'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1 className="text-green-800">GreenMart</h1>

      <div>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/products" element={<h1>Products Page</h1>}/>
          <Route path="/product-details" element={<h1>Product Details Page</h1>}/>
          <Route path="/cart" element={<h1>Cart Page</h1>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
