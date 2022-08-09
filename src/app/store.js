import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ProductReduser from './ProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prod:ProductReduser
  },
});
