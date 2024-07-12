import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [],
};
const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItemToCart(state, action) {
         const existingItem = state.cartItems.find(
            item => item.pro === action.payload.pro
         );
         if (existingItem) {
            existingItem.quantity += 1;
         } else {
            state.cartItems.push({...action.payload, quantity: 1});
         }
      },
      removeItemFromCart(state, action) {
         state.cartItems = state.cartItems.filter(
            item => item.pro !== action.payload
         );
      },
      clearCart(state) {
         state.cartItems = [];
      },
      increaseItemQuantity(state, action) {
         const itemToIncrease = state.cartItems.find(
            item => item.pro === action.payload
         );
         if (itemToIncrease) {
            itemToIncrease.quantity +=1;
         }
      },
      decreaseItemQuantity(state, action) {
         const itemToDecrease = state.cartItems.find(
            item => item.pro === action.payload
         );
         if (itemToDecrease && itemToDecrease.quantity > 1) {
            itemToDecrease.quantity -=1;
         }
      }
   }
});

//Exporting Action Creators and Reducer
export const {
   addItemToCart,
   removeItemFromCart,
   clearCart,
   increaseItemQuantity,
   decreaseItemQuantity
} = CartSlice.actions;

export default CartSlice.reducer;


