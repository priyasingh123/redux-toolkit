const redux = require('redux')
const createStore = redux.legacy_createStore
const produce = require('immer').produce
const reduxLogger = require ('redux-logger')
const applyMiddleware = redux.applyMiddleware

//creating logger
const logger = reduxLogger.createLogger()

//create action type
const STREET_UPDATED = 'STREET_UPDATED' 

//initial state 
const initialState = {
    name: 'Vishwas',
    address: {
        state: 'MA',
        city: 'Boston',
        street: '123 Main Street'
    }
}

//create action creator that return action which is an object with type and payload
const updateStreet = street => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}


//takes previous state and action and returns new state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            //without Immer
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
            //with immer
            /*return (
                produce(state, (draft) => {
                    //here draft is draft copy of state
                    draft.address.street = action.payload
                })
            )*/
        default:
            return state
    }
}

//using middleware redux-logger
const store = createStore(reducer, applyMiddleware(logger))
console.log ('Initial State', store.getState ())

//logger middleware will log previous state, action and next state 
store.subscribe (()=> {})
store.dispatch (updateStreet('456 uncommon street'))

