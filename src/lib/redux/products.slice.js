import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productsv4',
  initialState: [],
  reducers: {
    addToProducts: (state, action) => {
      state.push(...action.payload.products);
    },
    setToProducts: (state, action) => {
      return action.payload.products;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { addToProducts, setToProducts } = productsSlice.actions;
