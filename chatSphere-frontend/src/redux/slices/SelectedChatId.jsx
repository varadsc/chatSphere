import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  name:'',
}

export const SelectedChatSlice = createSlice({
  name: 'selectedId',
  initialState,
  reducers: {
    updateSelectedId : (state,action) => {
        state.value = action.payload
    },
    updateSelectedName : (state,action) => {
      state.name = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const { updateSelectedId ,updateSelectedName } = SelectedChatSlice.actions

export default SelectedChatSlice.reducer