import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();


const CartProvider = ({children})=>{
    const initialState = {
        cart: [],
        total_item: "",
        total_ampunt: "",
        shippping_fee: 50000,
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = (id, color, amount, product) =>{
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
    }
    return <CartContext.Provider value={{...state, addToCart}}>
        { children}
    </CartContext.Provider>
};

const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext}