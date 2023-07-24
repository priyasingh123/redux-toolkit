import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numberOfCakes: 10
}

//createSlice take three arguments: name, state and reducer
//createSlice will create actions with same name as we have written reducers 
const cakeSlice = createSlice({ 
    name: 'cake',
    initialState,
    reducers: {
        //ordered is a function with state as parameter 
        //createSlice uses immer library 
        ordered: (state) => { 
            state.numberOfCakes--
        },
        restocked: (state, action ) => {
            state.numberOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions