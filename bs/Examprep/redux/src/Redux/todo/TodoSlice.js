import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],

    reducers: {
        addtodo: (state,action)=>{
            state.push(action.payload);
        }
    }
});

export const {addtodo} = todoSlice.actions;
export default todoSlice.reducer;