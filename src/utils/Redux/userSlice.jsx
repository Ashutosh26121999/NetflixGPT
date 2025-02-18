// user Slice
import {createSlice} from "@reduxjs/toolkit";
import i18n from "../../i18n/i18n";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    defaultLanguage: {label: "English", code: "en"},
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    removeUser: () => ({
      uid: "",
      email: "",
      displayName: "",
      photoURL: "",
      defaultLanguage: {label: "English", code: "en"},
    }),
    changeLanguage: (state, action) => {
      state.defaultLanguage = action.payload;
      i18n.changeLanguage(action.payload.code);
    },
  },
});
export const {addUser, removeUser, changeLanguage} = userSlice.actions;
export default userSlice.reducer;
