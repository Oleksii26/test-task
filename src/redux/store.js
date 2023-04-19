import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { followReducer } from "./followSlice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'


const followersPersistConfig = {
    key: 'data',
    storage,
}

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
]

export const store = configureStore({
    reducer: {
        follow: persistReducer(followersPersistConfig, followReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'

})


export const persistor = persistStore(store)