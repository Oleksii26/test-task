import { createSlice } from '@reduxjs/toolkit'
import { fetchFollow, fetchUsers } from './operation'

const followSlice = createSlice({
    name: 'following',
    initialState: {
        users: [],
        isLoading: false,
        error: null
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
            const following = state.users.find(e => e.id === action.payload.id)
            following.follow = action.payload.follow
            following.followers = action.payload.followers
        },
        [fetchFollow.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload

        },
    }
})
export const followReducer = followSlice.reducer
export const { follow, unFollow } = followSlice.actions
