import { createSlice } from "@reduxjs/toolkit";

export const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [],
  },
  reducers: {
    addGroup(state, action) {
      state.groups.push(action.payload);
    },
    addItemToGroup(state, action) {
      let draggedItem = JSON.parse(localStorage.getItem("draggedItem"));
      let newState = state.groups.slice();
      newState
        .find((stateGroup) => stateGroup.title === action.payload.title)
        .cards.push(draggedItem);
      state.groups = newState;
    },
  },
});

export const { addGroup, addItemToGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
