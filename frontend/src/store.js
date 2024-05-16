// store.js
import { configureStore } from "@reduxjs/toolkit";
import {userReducer,authReducer} from "./userSlice";

const Store = configureStore({
  reducer: {
    user: userReducer, 
    auth: authReducer,
  },
});

export default Store;
