const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require ('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20
}

const iceCreamSlice = createSlice({
    name: 'icecream',  
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--
        },
        restoqcked: (state, action) => {
            state.numOfIcecreams = state.numOfIcecreams+action.payload
        }
    },
    //extra reducers will listen to action types which other reducers are listening to 
    /*extraReducers: {
        //Ist Method of writing extrareducers
        //this function name will be created using name/function named. eg - cake/ordered
        ['cake/ordered']: (state) => {
            //uses Immer under the hood 
            state.numOfIcecreams--
        }
    }*/
    //IInd method to use extraReducers
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams--
        })
    }
})

//export reducer as default export
module.exports = iceCreamSlice.reducer

//export actions as named export 
module.exports.iceCreamActions = iceCreamSlice.actions
