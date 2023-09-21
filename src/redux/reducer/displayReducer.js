import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    inputValue:"",
    resultValue:"",
}

const displayReducer = createSlice({
    name:"display",
    initialState,
    reducers:{
        inputDisplay:(state,action) =>{
            state.inputValue = state.inputValue + action.payload;
        },
        resultDisplay:(state,action) =>{
            state.resultValue =action.payload;
        },
        clearInputDisplay:(state) =>{
            state.inputValue = "";
        },
        clearResultDisplay:(state) =>{
            state.resultValue = "";
        }
    }
})

export default displayReducer.reducer;
export const {inputDisplay,resultDisplay,clearInputDisplay,clearResultDisplay} =displayReducer.actions;
