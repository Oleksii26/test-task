import { configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { followReducer } from "./followSlice"


export const store = configureStore({
    reducer: {
        follow: followReducer,
    },
    middleware(getDefaultMiddleWare) {
        return getDefaultMiddleWare({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
})
export const persistor = persistStore(store)