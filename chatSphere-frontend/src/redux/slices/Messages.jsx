import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const MessagesSlice = createSlice({
  name: 'storedMessages',
  initialState,
  reducers: {
    // updateActiveUsers : (state,action) => {
    //     state.value = action.payload
    // }
  },
})

// Action creators are generated for each case reducer function
export const { updateActiveUsers } = MessagesSlice.actions

export default MessagesSlice.reducer