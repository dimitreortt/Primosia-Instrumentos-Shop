import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../actions/productsActions";
import {
  BuyerInfo,
  defaultBuyerInfoState,
} from "../../../view/components/CheckoutStepper/defaultBuyerInfoState";

export interface CheckoutState {
  buyerInformation: BuyerInfo;
}

const initialState: CheckoutState = {
  buyerInformation: defaultBuyerInfoState,
};

export const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    setBuyerInformation: (state, action: PayloadAction<BuyerInfo>) => {
      state.buyerInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setUserId } = counterSlice.actions;
export const checkoutActions = checkoutSlice.actions;
export const { setBuyerInformation } = checkoutActions;
// export type SetcheckoutType = typeof setcheckout;
export default checkoutSlice.reducer;
