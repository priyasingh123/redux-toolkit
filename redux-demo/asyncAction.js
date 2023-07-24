const redux = require('redux')
const thunk = require ('redux-thunk').default
const createStore = redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')

//creating initial state 
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//declaring action types
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

//creating action creators 
//returns action

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users 
    }
}

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

//creating reducers
//takes previous state and action and returns new state

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

//thunk middleware allows action creator to return function.
//function returned may not be pure means allowed to have side-effects 
const fetchUsers = () => {
    return function (dispatch) {
        //dispatch fetUserRequest action-creator which return action with action-type FETCH_USERS_REQUESTED
        dispatch (fetchUserRequest())
        return axios
        .get ('https://jsonplaceholder.typicode.com/users')
        .then ((response) => {
            const users = response.data.map ((user) => user.name)
            dispatch(fetchUsersSucceeded(users))
        })
        .catch ((error) => {
            dispatch(fetchUsersFailed(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
console.log ('initial state', store.getState())
store.subscribe (()=> {console.log (store.getState())})
store.dispatch (fetchUsers())
// unsubscribe()


