import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from './client/dialogSlice';


const store= configureStore({
    reducer:{
   dialog:dialogSlice
    }
})

export default store