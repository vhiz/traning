import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.products.push(action.payload);
      }
    },

    removerItems: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

export const { addToCart, removerItems, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
