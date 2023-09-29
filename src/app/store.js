import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../StudentSlice";

const Store = configureStore({
    reducer:{
        Student : StudentSlice
    }
})

export default Store