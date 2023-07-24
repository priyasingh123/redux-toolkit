//Revised-1

//In this file, we have two states, two reducer managing cake and icecream respectively

console.log ('WITH TWO REDUCERS AND TWO STATES')
const redux = require('redux')
const createStore = redux.legacy_createStore

//bindActionCreators is used to bind different action creators
const bindActionCreators = redux.bindActionCreators

//combineReducers helps us combine multiple reducers
const combineReducers = redux.combineReducers


//creating action type 
// better to create constant as it should not be changed 
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


//creating action creator 
// action creators like "orderCake" will return action 
const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
} 

const restockCake = (qty=0) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
} 

const orderIceCream = () => {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
} 

const restockIceCream = (qty=0) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

//our initial state is numberOfCakes = 10
let initialCakeState = {
    numberOfCakes: 10
    
}
let initialIceCreamState = {
    numberOfIcecreams: 20
}


//reducer takes previous state and action and returns new state
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes-action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes+action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams-action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams+action.payload
            }
        default:
            return state
    }
}


const store = createStore(combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
}))

console.log ('Initial state', store.getState())

const unsubscribe = store.subscribe(()=> console.log ('update state', store.getState()))

const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)
/*store.dispatch (orderCake())
store.dispatch (orderCake())
store.dispatch (orderCake())
store.dispatch (restockCake(12))*/

//using bindActionCreators we can simplify syntax
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(12)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()

unsubscribe()
store.dispatch (orderCake())// this will change state but subscribe wont be called 
console.log ('now state ',store.getState())
