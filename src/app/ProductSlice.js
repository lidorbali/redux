import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './ProductAPI';
// state -the slicer variables
const initialState = {
  myProducts: [3,6,7],
  total: '89',
  waga:'baga',
  connect: true
};
//async calls(1)
export const incrementAsync = createAsyncThunk(
  'prod/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const prodSlice = createSlice({
  name: 'prod',
  initialState,
  reducers: { //sync methods
    
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },//async (result)(3)
    extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = prodSlice.actions;
export const selectMyProducts = (state) => state.prod.myProducts;
export const selectTotal = (state) => state.prod.total;
export const selectMyProductsCount = (state) => state.prod.myProducts.count;
export const selctWaga = (state) => state.prod.waga
export const selctconnect = (state) => state.prod.connect

export default prodSlice.reducer;
