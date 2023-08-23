const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
   
    // let existingProduct = state.cart.find((curItem)=> curItem.id === id + color);
    let existingProduct = Array.isArray(state.cart) ? state.cart.find((curItem) => curItem.id === id + color) : null;

    if(existingProduct){
      let updatedProduct = (Array.isArray(state.cart) ? state.cart : []).map((curElem) =>{
        if(curElem.id === id + color){
          let newAmount = curElem.amount + amount;
            if(newAmount >= curElem.max){
              newAmount = curElem.max;
            }
          return{
            ...curElem,
            amount : newAmount
          };
        }else{
          return curElem;
        }
          
      });
      return{
        ...state,
        cart: updatedProduct,
      }
    }else{
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: Array.isArray(state.cart) ? [...state.cart, cartProduct] : [cartProduct],
      };
    }
    }

  //   let cartProduct = {
  //     id: id + color,
  //     name: product.name,
  //     color,
  //     amount,
  //     image: product.image[0].url,
  //     price: product.price,
  //     max: product.stock,
  //   };
  //   return {
  //     ...state,
  //     cart: [...state.cart, cartProduct],
  //   };
  // }

  // TO SET INCREAMENT DECREMENT
    if(action.type === "SET_DECREMENT"){
      let updatedProduct = state.cart.map((curElem)=>{
        if(curElem.id === action.payload){
          let decAmount = curElem.amount - 1;
            if(decAmount <= 1){
              decAmount = 1;
            }
          return {
            ...curElem,
            amount: decAmount
          };
        }else{
          return curElem;
        }
      });
      return {...state, cart:updatedProduct}
    }

    if(action.type === "SET_INCREMENT"){
      let updatedProduct = state.cart.map((curElem)=>{
        if(curElem.id === action.payload){
          let incAmount = curElem.amount + 1;
            if(incAmount >= curElem.max){
              incAmount = curElem.max;
            }
          return {
            ...curElem,
            amount: incAmount
          };
        }else{
          return curElem;
        }
      });
      return {...state, cart:updatedProduct}
    }

    //remove item
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  // to clear cart
  if(action.type === "CLEAR_CART"){
    return{
      ...state,
      cart: [],
    }
  }

  if(action.type === "CART_TOTAL_ITEM"){
    const cartArray = Array.isArray(state.cart) ? state.cart : [];
    let updatedItemVal = cartArray.reduce((initialVal, curElem)=>{
      let {amount} = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    },0);
    return {
      ...state,
      total_item : updatedItemVal,
    }
  }
  return state;
};

export default cartReducer;

// const cartReducer = (state, action) => {
//   if (action.type === "ADD_TO_CART") {
//     let { id, color, amount, product } = action.payload;
   
//     // let existingProduct = state.cart.find((curItem)=> curItem.id === id + color);
//     let existingProduct = Array.isArray(state.cart) ? state.cart.find((curItem) => curItem.id === id + color) : null;

//     if(existingProduct){
//       let updatedProduct = (Array.isArray(state.cart) ? state.cart : []).map((curElem) =>{
//         if(curElem.id === id + color){
//           let newAmount = curElem.amount + amount;
//             if(newAmount >= curElem.max){
//               newAmount = curElem.max;
//             }
//           return{
//             ...curElem,
//             amount : newAmount
//           };
//         }else{
//           return curElem;
//         }
          
//       });
//       return{
//         ...state,
//         cart: updatedProduct,
//       }
//     }else{
//       let cartProduct = {
//         id: id + color,
//         name: product.name,
//         color,
//         amount,
//         image: product.image[0].url,
//         price: product.price,
//         max: product.stock,
//       };
//       return {
//         ...state,
//         cart: [...state.cart, cartProduct],
//       };
//     }
//     }

//   //   let cartProduct = {
//   //     id: id + color,
//   //     name: product.name,
//   //     color,
//   //     amount,
//   //     image: product.image[0].url,
//   //     price: product.price,
//   //     max: product.stock,
//   //   };
//   //   return {
//   //     ...state,
//   //     cart: [...state.cart, cartProduct],
//   //   };
//   // }

//   // TO SET INCREAMENT DECREMENT
//     if(action.type === "SET_DECREMENT"){
//       let updatedProduct = state.cart.map((curElem)=>{
//         if(curElem.id === action.payload){
//           let decAmount = curElem.amount - 1;
//             if(decAmount <= 1){
//               decAmount = 1;
//             }
//           return {
//             ...curElem,
//             amount: decAmount
//           };
//         }else{
//           return curElem;
//         }
//       });
//       return {...state, cart:updatedProduct}
//     }

//     if(action.type === "SET_INCREMENT"){
//       let updatedProduct = state.cart.map((curElem)=>{
//         if(curElem.id === action.payload){
//           let incAmount = curElem.amount + 1;
//             if(incAmount >= curElem.max){
//               incAmount = curElem.max;
//             }
//           return {
//             ...curElem,
//             amount: incAmount
//           };
//         }else{
//           return curElem;
//         }
//       });
//       return {...state, cart:updatedProduct}
//     }

//     //remove item
//   if (action.type === "REMOVE_ITEM") {
//     let updatedCart = state.cart.filter(
//       (curItem) => curItem.id !== action.payload
//     );
//     return {
//       ...state,
//       cart: updatedCart,
//     };
//   }
//   // to clear cart
//   if(action.type === "CLEAR_CART"){
//     return{
//       ...state,
//       cart: [],
//     }
//   }

//   if(action.type === "CART_TOTAL_ITEM"){
//     const cartArray = Array.isArray(state.cart) ? state.cart : [];
//     let updatedItemVal = cartArray.reduce((initialVal, curElem)=>{
//       let {amount} = curElem;

//       initialVal = initialVal + amount;
//       return initialVal;
//     },0);
//     return {
//       ...state,
//       total_item : updatedItemVal,
//     }
//   }
//   return state;
// };

// export default cartReducer;