import { authToken } from "services/authToken";
import contactsAPI from "services/contactsAPI";
const { createAsyncThunk } = require("@reduxjs/toolkit");

const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const user = await contactsAPI.postUserRegistrData(userCredentials);
      authToken.set(user.token);
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const user = await contactsAPI.postUserLoginData(userCredentials);
      authToken.set(user.token);
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await contactsAPI.deleteUserLoginData();
      authToken.unset();
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    authToken.set(persistedToken);
    try {
      const currentUser = await contactsAPI.fetchCurrentUser();
      return currentUser;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { registerUser, loginUser, logOutUser, getCurrentUser };
