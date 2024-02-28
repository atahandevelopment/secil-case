/* eslint-disable react-refresh/only-export-components */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketSliceReducer from './basketSlice';

const rootReducer = combineReducers({
  basket: basketSliceReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type AppStore = ReturnType<typeof rootReducer>

export default store;