import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    metadata: {
      cartId: null,
    },
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const { items } = state;
      const itemIndex = items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );
      if (itemIndex !== -1) {
        state.items = [
          ...items.slice(0, itemIndex),
          {
            ...items[itemIndex],
            quantity: items[itemIndex].quantity + action.payload.quantity,
          },
          ...items.slice(itemIndex + 1),
        ];
      } else {
        state.items = [
          ...items,
          {
            productId: action.payload.productId,
            productTitle: action.payload.productTitle,
            quantity: action.payload.quantity,
            size: action.payload.size,
          },
        ];
      }
    },

    changeQuantity: (state, action) => {
      const itemExists = state.items.find((item) => {
        return (
          item.productId === action.payload.productId &&
          item.size === action.payload.size
        );
      });
      if (itemExists) {
        itemExists.quantity = action.payload.quantity;
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );
      state.items.splice(index, 1);
    },
    generateNewCartId: (state, action) => {
      const { metadata } = state;
      state.metadata = {
        ...metadata,
        cartId: uuidv4(),
      };
    },
    emptyCart: (state, action) => {
      state.metadata = {
        ...state.metaData,
        cartId: null,
      };
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  changeQuantity,
  removeFromCart,
  generateNewCartId,
  emptyCart,
} = cartSlice.actions;
