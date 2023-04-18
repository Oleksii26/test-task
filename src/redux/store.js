import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { followReducer } from "./followSlice"


export const store = configureStore({
    reducer: {
        follow: followReducer,
    },

   
})
setupListeners(store.dispatch)