import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App";

interface CartState {
  items: Produto[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (state.items.find((p) => p.id === action.payload.id)) {
        return;
      }
      state.items.push(action.payload);
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    limparCarrinho: (state) => {
      state.items = [];
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } =
  cartSlice.actions;
export default cartSlice.reducer;
