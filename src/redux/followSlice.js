import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const followSlice = createSlice({
    name: 'following',
    initialState: {
        value: 100500,
        isFollow: false
    },
    reducers: {
        follow(state, action) {
            state.value -= action.payload
            state.isFollow = false

        },
        unFollow(state, action) {
            state.value += action.payload
            state.isFollow = true
        }
    }
})

const persistConfig = {
    key: 'following',
    storage
}

export const followReducer = persistReducer(persistConfig, followSlice.reducer)
export const { follow, unFollow } = followSlice.actions
