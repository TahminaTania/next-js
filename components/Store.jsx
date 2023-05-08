import React from 'react'


import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/pages/api/CartSlice';
const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer
});

export default store;


