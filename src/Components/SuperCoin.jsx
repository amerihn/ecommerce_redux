import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SuperCoin = () => {

   //initialize superCoins
   const [superCoins, setSuperCoins] = useState(0);

   //retrieve the cartItems
   const cartItems = useSelector(state => state.cart.cartItems);

   //calculate the total amount
   const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
   );

   //update the superCoins state
   useEffect(() => {
      if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
      } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
      } else if (totalAmount >= 300) {
      setSuperCoins(30);
      } else {
      setSuperCoins(0);
      }
   }, [totalAmount]);

   return (
      <>
      <div className="super-coins" style={{textAlign:'center'}} >
         <h2 className="super-coins-title">
            Super Coins
         </h2>
         <p className="super-coins-info">
         You will earn {superCoins} super coins with this purchase.
         </p>
      </div>
      </>
   )

};

export default SuperCoin;