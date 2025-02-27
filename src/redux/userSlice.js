import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const userSlice = createSlice({
    name: "first-user",
    initialState,

    // state update function
    // reduce 2-----> state & action.playload 
    reducers: {
        increment: (state) => {
            state.value = +1
        },
        decrement: (state) => {
            state.value = -1
        }
    }
})

// return action
export default userSlice.reducer
export const {increment, decrement} = userSlice.actions;