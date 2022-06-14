import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeliveryTaxes } from "../../service/dispatchDeliveryTaxes";

export interface DeliveryOptionState {
  cep: string;
  taxes: DeliveryTaxes;
  productId?: string;
}

export interface DeliveryState {
  cart: DeliveryOptionState | undefined;
  product: DeliveryOptionState | undefined;
}

const initialState: DeliveryState = {
  cart: undefined,
  product: undefined,
};

export const deliverySlice = createSlice({
  name: "deliverySlice",
  initialState,
  reducers: {
    setCartTaxes(state, action: PayloadAction<DeliveryOptionState>) {
      state.cart = action.payload;
    },
    setProductTaxes(state, action: PayloadAction<DeliveryOptionState>) {
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const deliveryActions = deliverySlice.actions;
export const { setCartTaxes, setProductTaxes } = deliveryActions;
// export type SetdeliveryType = typeof setdelivery;
export default deliverySlice.reducer;
