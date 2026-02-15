import {createContext,useState,useContext} from "react";
import {useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

// Simple axios-like wrapper using fetch
const axios = {
  get: async (url) => {
    const response = await fetch(url);
    return { data: await response.json() };
  },
  post: async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { data: await response.json() };
  },
};

export const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
};

const AppContextProvider = ({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState(null);
    const [isSeller,setIsSeller]=useState(null);
    const [showUserLogin,setShowUserLogin]=useState(false);
    const [products,setProducts]=useState([]);

    const [cartItems,setCartItems]=useState([]);
    const [searchQuery,setSearchQuery]=useState("");

    const fetchProducts=async()=>{
        setProducts(dummyProducts);
    };

    //add to cart function 
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems);

        if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to cart");

    }

    //update cart item quantity
    const updateCartItem=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);

        if (quantity > 0) {
      cartData[itemId] = quantity;
    } else {
      delete cartData[itemId];
    }

    setCartItems(cartData);
    toast.success("Cart updated");
    }
    //total cart items
    const cartCount=()=>{
        let totalCount=0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }
    //total cart amount
    const totalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += cartItems[items] * itemInfo.offerPrice;
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  // remove product from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
      toast.success(`removed from cart`);
      setCartItems(cartData);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
    
    
    const value={
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        addToCart,
        cartCount,
        totalCartAmount,
        removeFromCart,
        updateCartItem,
        cartItems,
        setCartItems,
        searchQuery,
        setSearchQuery,
        axios
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;