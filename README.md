List.js

    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]); 
    // State to store disabled products
  
    const products = [
      { pro: 'x', name: 'Product A', price: 10 },
      { pro: 'y', name: 'Product B', price: 20 },
      { pro: 'z', name: 'Product C', price: 30 },
    ];
  
    const handleAddToCart = product => {
      dispatch(addItemToCart(product));
      setDisabledProducts([...disabledProducts, product.pro]); // Mark the product as disabled
    };

Slice.js

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

Cart.js

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

