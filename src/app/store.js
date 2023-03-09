import { configureStore } from '@reduxjs/toolkit'
import accountSlice from 'features/acountslice';
import devideSlice from 'features/deviceslice';
export const store = configureStore({
  reducer: {
    Account: accountSlice,
    Device:devideSlice
  },
})