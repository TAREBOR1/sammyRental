import {  createSlice } from "@reduxjs/toolkit";


const initialState={
   dialog:false
}

const dialogSlice=createSlice({
    name:'dialog',
    initialState,
    reducers:{
      setDialog:((state)=>{
       state.dialog=true
      }),
      resetDialog:((state)=>{
         state.dialog=false
      })
      },

})


export const {setDialog,resetDialog} = dialogSlice.actions;

export default dialogSlice.reducer;