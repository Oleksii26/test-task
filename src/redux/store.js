import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
// import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { followReducer } from "./followSlice"
import { usersApi } from "./userSlice"


export const store = configureStore({
    reducer: {
        follow: followReducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: getDefaultMiddleWare => [
        ...getDefaultMiddleWare(),
        usersApi.middleware
    ]
    // middleware(getDefaultMiddleWare) {
    //     return getDefaultMiddleWare({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    //         }
    //     })
    // }
})
setupListeners(store.dispatch)
// export const persistor = persistStore(store)