import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface productType {
  brand: string,
  createdAt: string,
  description: string,
  id: number,
  name: string,
  photo: string,
  price: string,
  updatedAt: string,
}

interface shoppingCartState {
    open: boolean,
    cartProducts: Array<productType>,
  allTheProducts: Array<productType>,
  }
  
const initialState: shoppingCartState = {
  open: false,
  cartProducts: [],
  allTheProducts: [],
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
    saveProductInCart: (state, { payload }) => {
      const thereIsProduct = state.cartProducts.some((product) => product.id === payload.id);
      if(!thereIsProduct) {
        state.cartProducts = [...state.cartProducts, payload];
        state.allTheProducts = [...state.allTheProducts, payload];
      } else {
        state.allTheProducts = [...state.allTheProducts, payload];
      }
    }
  },
});

export const selectShoppingCart = (state: RootState) => state.shoppingCart;

export const { closeDrawer, openDrawer, saveProductInCart } = shoppingCartSlice.actions;