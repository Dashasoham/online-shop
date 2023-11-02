import { createSlice } from '@reduxjs/toolkit';
const storedData = JSON.parse(localStorage.getItem('cartItems'));
// const numberOfItems = storedData ? storedData.length : 0;

const initialState = {
  items: storedData || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      console.log(1, action.payload);
      //   console.log(numberOfItems); // Save the updated items to localStorage

      console.log(555);
    },
    removeFromCart: (state, action) => {
      // const cartItemIdToRemove = action.payload;
      // const updatedItems = state.items.filter(
      //   (item) => item.cartId !== cartItemIdToRemove
      // );
      // state.items = updatedItems;
      // localStorage.setItem('cartItems', JSON.stringify(state.items));

      state.items.splice(action.payload, 1);
      console.log(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
