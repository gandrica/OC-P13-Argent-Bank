import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithAuth } from "../../services/fetchWithAuth";

const tokenFromStorage = localStorage.getItem("token");
console.log(tokenFromStorage);

const initialState = {
  loading: false,
  token: tokenFromStorage || null,
  isLogged: !!tokenFromStorage, // true si on a un token, false sinon
  profile: null,
  error: null,
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async ({ email, password }) => {
    const responseAPI = await fetchWithAuth("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    return responseAPI;
  },
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async () => {
    const responseAPI = await fetchWithAuth("/profile", { method: "POST" });

    return responseAPI;
  },
);
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ firstName, lastName }) => {
    const responseAPI = await fetchWithAuth("/profile", {
      method: "PUT",
      body: JSON.stringify({ firstName, lastName }),
    });

    return responseAPI;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.profile = null;
      state.error = null;
      state.isLogged = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Fetch Token
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.body.token;
      state.isLogged = true;
      localStorage.setItem("token", action.payload.body.token);
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Fetch User Profile
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.body;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // Update User Profile
    builder.addCase(updateUserProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.body;
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
