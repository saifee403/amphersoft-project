import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () =>{
    let newCartData = localStorage.getItem("saif");
    if(newCartData === []){
        return [];
    }else{
        return JSON.parse(newCartData);
    }
}

const initialState = {
//   cart: [],
cart : getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
//   increment decrement

  const setDecrease = (id) =>{
    dispatch({type: "SET_DECREMENT", payload: id});
  };

  const setIncrease = (id) =>{
    dispatch({type: "SET_INCREMENT", payload: id});
  };
//   remove
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

// clear cart

  const clearCart = () =>{
    dispatch({ type: "CLEAR_CART"})
  }
//   to add in localStorage

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type: "CART_TOTAL_PRICE"})
        localStorage.setItem("saif", JSON.stringify(state.cart))
    }, [state.cart]);


  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };