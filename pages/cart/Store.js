import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../Cart.Slice';
const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store