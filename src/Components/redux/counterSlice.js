import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({// to create slice createSlice method is used 
    name: 'counterApp',
    initialState: {
        value: 0
    },
    reducers: { //actions are created inside this reducers key as object
        //logics to update state
        increment: (state,action) => {//function to increment number
            //if its a argument function then i can only be accessed by action and value in payload
            state.value += action.payload
        },
        decrement: (state,action) => {//function to decrement number
            state.value -= action.payload
        },
        reset: (state) => {//function to reset 
            state.value = 0
        }


    }

})
//action is required by component inorder to update state.
export const{increment,decrement,reset}=counterSlice.actions


//reducer is required to store to change the state value.
export default counterSlice.reducer