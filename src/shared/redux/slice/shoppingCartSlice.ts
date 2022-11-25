import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface shoppingCartState {
    open: boolean
  }
  
const initialState: shoppingCartState = {
  open: false,
};

export const shoppingCartSlice = createSlice({
  name: 'Shopping Cart',
  initialState,
  reducers: {
    closeDrawer: (state) => {
      state.open = false;
    },
    openDrawer: (state) => {
      state.open = true;
    },
  },
});

export const selectCount = (state: RootState) => state.shoppingCart;

export const { closeDrawer, openDrawer } = shoppingCartSlice.actions;