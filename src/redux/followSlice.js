import { createSlice } from '@reduxjs/toolkit'
import { fetchFollow, fetchUsers } from './operation'

const followSlice = createSlice({
    name: 'following',
    initialState: {
        users: [],
        value: 100,
        isFollow: false,
        isLoading: false,
        error: null
    },
    reducers: {
        follow(state, action) {
            // state.value -= action.payload
            state.isFollow = false
        },
        unFollow(state, action) {
            state.value += action.payload
            state.isFollow = true
            console.log(action.payload);
        }
    },
    extraReducers: {
        [fetchUsers.pending](state) {
            state.isLoading = true
        },
        [fetchUsers.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.users = action.payload

        },
        [fetchUsers.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchFollow.pending](state, action) {
            state.isLoading = true

        },
        [fetchFollow.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.items = state.items.find(e => e.id === action.payload.id)
            console.log(state.users);
        },
        [fetchFollow.rejected](state) {
            state.isLoading = false

        },
    }
})


export const followReducer = followSlice.reducer
export const { follow, unFollow } = followSlice.actions
