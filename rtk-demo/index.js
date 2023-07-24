//import store
const store = require ('./app/store')

//import actions 
const cakeActions = require ('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require ('./features/icecream/iceCreamSlice').iceCreamActions

//import fetchUsers
const fetchUsers = require('./features/users/usersSlice').fetchUsers

//log initial state 
console.log ('initial state', store.getState())

//subscribe to updates in store 
const unsubscribe = store.subscribe(() => {
    console.log ('updated state', store.getState())
})

store.dispatch (fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch (iceCreamActions.ordered())
// store.dispatch (iceCreamActions.ordered())
// store.dispatch (iceCreamActions.ordered())
// store.dispatch (iceCreamActions.restocked(3))

//unsubscribe()