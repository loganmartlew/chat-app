import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface AuthState {
  authUser: User | null;
}

const initialState: AuthState = {
  authUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action: PayloadAction<User>) {
      state.authUser = action.payload;
    },
    removeAuthUser(state, _) {
      state.authUser = null;
    },
  },
});

export const { setAuthUser, removeAuthUser: removeAuthUserPayload } =
  authSlice.actions;

export const removeAuthUser = () => removeAuthUserPayload({});

export default authSlice.reducer;
