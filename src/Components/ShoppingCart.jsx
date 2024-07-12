import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; 
// Assuming you have action creators for increasing and decreasing item quantity

const ShoppingCart = () => {

  // Redux Hooks
  const dispatch = useDispatch();
  
  // State Retrieval
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Event Handlers
  const handleRemoveItem = (product) => {
    dispatch(removeItemFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncreaseQuantity = productItem => {
    dispatch(increaseItemQuantity(productItem));
    console.log(productItem);
  };
  const handleDecreaseQuantity = productItem => {
    dispatch(decreaseItemQuantity(productItem));
  };

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {/* Redering */}
        {cartItems.map(item => (
          <li key={item.pro} className="cart-item">
            <span> 
              {item.name} - ${item.price}
            </span>
            <div className="quantity-controls">
              <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.pro)}>
                -
              </button>
              <span> 
                {item.quantity} 
              </span>
              <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.pro)}>
                +
              </button>
            </div>
            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.pro)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
    <div>
      { totalAmount ? <div>'The total amount is {totalAmount}</div> : '' }
    </div>
  
    </>
  );
};

export default ShoppingCart;
