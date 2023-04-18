import { createSlice } from '@reduxjs/toolkit'
import { fetchFollow, fetchUsers, fetchUnFollow } from './operation'

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
        },
        [fetchFollow.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
            state.users = false
        },
        [fetchUnFollow.pending](state, action) {
            state.isLoading = true

        },
        [fetchUnFollow.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
        },
        [fetchUnFollow.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export const followReducer = followSlice.reducer
export const { follow, unFollow } = followSlice.actions
