import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ConnectedUserSlice = createSlice({
  name: 'connectedUsers',
  initialState,
  reducers: {
    updateActiveUsers : (state,action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateActiveUsers } = ConnectedUserSlice.actions

export default ConnectedUserSlice.reducer