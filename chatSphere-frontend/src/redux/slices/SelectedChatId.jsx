import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const SelectedChatSlice = createSlice({
  name: 'selectedId',
  initialState,
  reducers: {
    updateSelectedId : (state,action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateSelectedId } = SelectedChatSlice.actions

export default SelectedChatSlice.reducer