import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useContext } from "react" ;
import { AppContext } from "./context/AppContext";
import { useLocation } from 'react-router-dom';
import MyOrders from './pages/MyOrders.jsx';
import Auth from './models/Auth.jsx';


const App = () => {
  const {isSeller,showUserLogin}=useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="text-default min-h-screen">
      {isSellerPath ? null : <Navbar/>}
      {showUserLogin ? <Auth/> : null } 
      

      <div className="px-4 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/product-details" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/my-orders" element={<MyOrders />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
