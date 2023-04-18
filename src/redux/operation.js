import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64393e791b9a7dd5c962b213.mockapi.io/users'


export const fetchUsers = createAsyncThunk('users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get(`/users`)
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


export const fetchFollow = createAsyncThunk('users/fetchFollow',
    async (users, thunkAPI) => {
        try {
            // fetchUsers()
            const res = await axios.put(`/users/${users.id}`, { follow: !users.follow })
            fetchUsers(res)
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    })

