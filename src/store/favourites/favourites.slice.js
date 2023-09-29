import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        toggleAddToFavourites: (state, {payload}) => {
            const product = payload;
            const isExist = state.some(prod => prod.article === product.article);

            if(isExist)
                state = state.filter(prod => prod.article !==  product.article)
            else
                state.push(product)
        }
    }
})
 
export const { actions, reducer } = favouritesSlice;
 
 