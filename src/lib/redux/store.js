import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from './storage';

import { cartReducer } from './cart.slice';
import { productsReducer } from './products.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['tracking'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });
};

export { makeStore };
