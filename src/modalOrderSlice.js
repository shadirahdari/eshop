// eslint-disable-next-line import/namespace
import { createSlice } from '@reduxjs/toolkit';

const modalOrderSlice = createSlice({
  name:'modal',
  initialState: {
    isModalOpen: false,
    orderConfirmed: false,
    orderCanceled: false,
  },
  reducers: {
    toggleModal(state) {
      state.isModalOpen = true
    },
    confirmMessage(state) {
      state.confirmMessage  = true
    },
    cancelMessage(state) {
      state.cancelMessage  = true
    }
  }
})

export const modalOrderActions = modalOrderSlice.actions
export default modalOrderSlice.reducer
