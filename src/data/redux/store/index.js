import { configureStore } from "@reduxjs/toolkit";

import listingSlice from "../slice/listingDataSlice";
import tokenSlice from "../slice/tokenSlice";
const store = configureStore({
  reducer: {
    listingSlice: listingSlice,
    token: tokenSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
