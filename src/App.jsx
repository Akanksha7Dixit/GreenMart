import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <h1 className="text-green-800">GreenMart</h1>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/product-details" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
