import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= 1;
        state.totalPrice -= product.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
