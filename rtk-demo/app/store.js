const configureStore = require ('@reduxjs/toolkit').configureStore
//const reduxLogger = require ('redux-logger')

const cakeReducer = require ('../features/cake/cakeSlice')
const iceCreamReducer = require ('../features/icecream/iceCreamSlice')
const userReducer = require ('../features/users/usersSlice')

//const logger = reduxLogger.createLogger()

const store = configureStore ({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    //thunk middleware is applied by itself when we make use of "createAsyncThunk"

    //middleware: (getDefaultMiddleware) => 
        //configureStore already have default middleware 
        //to default middleware, we explicitly append logger middleware 
        //getDefaultMiddleware().concat(logger)
    
})

module.exports = store