import { createSlice } from '@reduxjs/toolkit'
import { setMessageFormat } from '../../utils/setUpMessageData';

const initialState = {
  value: {},
}

export const MessagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    updateMessages : (state,action) => {
        const valueToset = setMessageFormat(state.value , action.payload);
        state.value = valueToset;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateMessages } = MessagesSlice.actions

export default MessagesSlice.reducer