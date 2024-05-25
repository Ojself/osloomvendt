import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productsv4',
  initialState: [],
  reducers: {
    addToProducts: (state, action) => {
      state = [...state, ...action.payload.products];
    },
    setToProducts: (state, action) => {
      state = [...action.payload.products];
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { addToProducts, setToProducts } = productsSlice.actions;
