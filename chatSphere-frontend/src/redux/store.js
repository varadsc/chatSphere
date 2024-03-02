import { configureStore } from '@reduxjs/toolkit'
import ConnectedUserSlice from './slices/ConnectedUserSlice'
import  SelectedChatSlice  from './slices/SelectedChatId'


export const store = configureStore({
  reducer: {
    connectedUsers : ConnectedUserSlice,
    selectedId :SelectedChatSlice,
  },
})