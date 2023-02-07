import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../api";


const initialState = {
    users: [],
    user: null,
    errors: null,
    loading: null
}

const getAllUsers = createAsyncThunk(
    'userSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAllUsers();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);



const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getSelectedUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getAllUsers.fulfilled]:(state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [getAllUsers.pending]:(state) => {
            state.loading = true
        }
    }
});

const {reducer: userReducer, actions:{getSelectedUser}} = userSlice;

const userActions = {
    getSelectedUser,
    getAllUsers
}

export {
    userReducer,
    userActions
}
