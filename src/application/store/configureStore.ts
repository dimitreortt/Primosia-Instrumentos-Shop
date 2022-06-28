import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import deliveryReducer from "./features/deliverySlice";
import checkoutReducer from "./features/checkoutSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    delivery: deliveryReducer,
    checkout: checkoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
