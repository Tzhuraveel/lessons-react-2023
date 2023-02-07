import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../api";


const initialState = {
    posts: [],
    post: null,
    errors: null,
    loading: null
}

const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAllPosts();
            return [...data]
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getSelectedPost: (state, action) => {
            state.post = action.payload
        }
    },
    extraReducers: {
        [getAllPosts.fulfilled]:(state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [getAllPosts.pending]:(state) => {
            state.loading = true
        }
    }
});

const {reducer: postReducer, actions: {getSelectedPost}} = postSlice;

const postActions = {
    getSelectedPost,
    getAllPosts
}

export {
    postReducer,
    postActions
}