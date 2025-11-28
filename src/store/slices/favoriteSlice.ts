import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App";

interface FavoritesState {
  items: Produto[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const existingIndex = state.items.findIndex(
        (p) => p.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { favoritar, removerFavorito } = favoritesSlice.actions;
export default favoritesSlice.reducer;
