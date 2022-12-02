import { configureStore } from '@reduxjs/toolkit';
import { shoppingCartSlice } from './slice';

export const setupStore = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice.reducer,
  }
});

export type RootState = ReturnType<typeof setupStore.getState>;

export type AppDispatch = typeof setupStore.dispatch;