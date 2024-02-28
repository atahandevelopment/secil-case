import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketProducts: [],
    count: 0,
  },
  reducers: {
    incrementBasketCount: (state) => {
      state.count += 1;
    },
    decrementBasketCount: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    setBasketCount: (state, action) => {
      state.count = action.payload;
    },
    setBasketTotal: (state, action) => {
        state.count = action.payload;
        localStorage.setItem("counter", JSON.stringify(state.count));
    },

    getBasketProducts: (state, action) => {
        state.basketProducts = action.payload;
    },
  },
});

export const {
    setBasketCount,
    setBasketTotal,
    decrementBasketCount,
    getBasketProducts,
    incrementBasketCount
} = basketSlice.actions;

export default basketSlice.reducer;
