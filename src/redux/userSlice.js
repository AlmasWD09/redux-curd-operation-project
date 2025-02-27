import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
}

const userSlice = createSlice({
    name: "first-user",
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state)
        },
        decrement: (state) => {
            console.log(state)
        }
    }
})