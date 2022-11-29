import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./groups";

export default configureStore({
  reducer: { groups: groupReducer },
});
