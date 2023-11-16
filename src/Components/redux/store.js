import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({//configstore is in redux toolkit so configstore have to be imported from redux toolkit
    //we need to export store so that components can acces it.
    //reducer can only update value of state  in store
    //reducer key is predefined and also(it is an object which can hold more than one reducer)
    reducer: {//reducer is coming from counterSlice since we are export reducer as export default
        counter: counterSlice

    }
})
