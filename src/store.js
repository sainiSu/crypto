import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './features/CryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer
  }
});

export default store;
