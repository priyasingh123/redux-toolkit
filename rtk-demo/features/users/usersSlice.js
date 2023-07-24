//Async function in redux toolkit 

const createSlice = require ('@reduxjs/toolkit').createSlice

//import createAsyncThunk from redux-toolkit
const createAsyncThunk = require ('@reduxjs/toolkit').createAsyncThunk
const axios = require ('axios')

const initialState = {
    users: [],
    loading: false,
    error: ''
}

//createAsyncThunk take two arguments - action type, callback function that creates payload
//createAsyncThunk generates pending, fulfilled, and rejected action types 
const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return axios
    .get ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user =>user.id   
    ))
    
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    //need to use extraReducers 
    extraReducers: builder => {
        //fetchUsers.pending, fetchUsers.fulfilled , fetchUsers.rejected are action types created by createAsyncThunk itself
        builder.addCase(fetchUsers.pending, state => {
            state.loading =  true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading =  false,
            state.users = action.payload,
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    } 
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers
