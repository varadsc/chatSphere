import { configureStore } from '@reduxjs/toolkit'
import ConnectedUserSlice from './slices/ConnectedUserSlice'


export const store = configureStore({
  reducer: {
    connectedUsers : ConnectedUserSlice,
  },
})