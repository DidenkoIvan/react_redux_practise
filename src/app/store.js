import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// This creates a Redux store, and also automatically
//  configure the Redux DevTools extension so that you can inspect the store while developing.

export default configureStore({
    reducer: {
      counter: counterReducer
    }
  })

// const store = configureStore({ reducer: { counter: counterReducer } })

// console.log(store.getState())