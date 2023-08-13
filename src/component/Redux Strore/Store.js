import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Redux Slice/CartSlice';



export const store = configureStore({
  reducer: {
    allCart : cartReducer,
  },
  
});