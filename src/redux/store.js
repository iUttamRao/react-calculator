import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./reducer/displayReducer";

const store = configureStore({
    reducer : {
        display:displayReducer,
    }
})

export default store;