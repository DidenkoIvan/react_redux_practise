import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModalCards: false,
  article: null,
};

const modalSliceCards = createSlice({
  name: 'PROD_CARDS_MODAL',
  initialState,
  reducers: {
    openModalCards: (state, action) => {
      state.openModalCards= true;
      state.article = action.payload;
    },
    closeModalCards: (state) => {
      state.openModalCards = false;
      state.article = null;
    },
  },
});

export const { openModalCards, closeModalCards } = modalSliceCards.actions;
export default modalSliceCards.reducer;