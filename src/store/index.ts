import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoritesSlice from "./slices/favoriteSlice";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
