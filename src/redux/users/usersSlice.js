import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://randomuser.me/api/?results=5";

const initialState = {
  users: [],
  isLoading: true,
  error: false,
};

const getUsers = createAsyncThunk("users/getUsers", () => {
  fetch(url)
    .then((res) => res.json)
    .catch((err) => console.log(err));
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {} = usersSlice.reducer;
