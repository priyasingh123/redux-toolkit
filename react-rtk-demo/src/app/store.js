import { configureStore } from '@reduxjs/toolkit'
//const reduxLogger = require ('redux-logger')

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/users/usersSlice'

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

export default store;

