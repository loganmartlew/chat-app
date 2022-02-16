import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { AuthUser } from '~/types/authUser';

export interface AuthState {
  authUser: AuthUser | null;
}

const initialState: AuthState = {
  authUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action: PayloadAction<User>) {
      const user = action.payload;

      if (!user.displayName) return;

      state.authUser = {
        uid: user.uid,
        username: user.displayName,
        avatar: user.photoURL || user.providerData[0].photoURL || '',
      };
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
