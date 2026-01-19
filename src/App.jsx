import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useContext } from "react" ;
import { AppContext } from "./context/AppContext";
import { useLocation } from 'react-router-dom';

const App = () => {
  const {isSeller}=useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div>
      {isSellerPath ? null : <Navbar />}
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
