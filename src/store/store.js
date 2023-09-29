import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favouriteReducer } from "./favourites/favourites.slice";


const reducers = combineReducers({
    favourites: favouriteReducer,
})

export const store = configureStore({
    reducer: reducers,
    devTools: true,
})

