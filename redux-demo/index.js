//Revised - 1
//In this file, we have one state, one reducer managing cake and icecream

console.log ('WITH ONE REDUCER AND ONE STATE')
const redux = require('redux')
const createStore = redux.legacy_createStore

//bindActionCreators is used to bind different action creators
const bindActionCreators = redux.bindActionCreators


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

//reducer takes previous state and action and returns new state

//our initial state is numberOfCakes = 10 and numOfIceCreams=20
let initialState = {
    numberOfCakes: 10,
    numberOfIcecreams: 20
}

const reducer = (state = initialState, action) => {
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


const store = createStore(reducer)

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
