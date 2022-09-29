import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    changeName: (state, action) => {
      const userName = action.payload;
      return userName
    },
    changeColor:(state,action)=>{

    }
  }
});

export const { changeName,changeColor } = userNameSlice.actions;

export default userNameSlice.reducer;