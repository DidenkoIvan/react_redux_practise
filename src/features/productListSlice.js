import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openModalFromList: false,
    article: null,
}

const modalSliceFromList = createSlice({
    name: 'PROD_LIST_MODAL',
    initialState,
    reducers: {
      openModalFromList: (state, action) => {
        state.openModalFromList = true;
        state.article = action.payload;
      },
      closeModalFromList: (state) => {
        state.openModalFromList = false;
        state.article = null;
      },
    },
  });
  
  export const { openModalFromList, closeModalFromList } = modalSliceFromList.actions;
  export default modalSliceFromList.reducer;