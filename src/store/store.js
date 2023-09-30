import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/productCardsSlice';
import modalReducer2 from '../features/productListSlice'

export default configureStore({
  reducer: {
    PROD_CARDS_MODAL: modalReducer,
    PROD_LIST_MODAL: modalReducer2
  }
})
