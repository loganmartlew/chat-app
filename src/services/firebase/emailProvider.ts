import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const signUp = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (_) {
    throw new Error('Failed to sign up');
  }
};

export const signIn = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (_) {
    throw new Error('Failed to sign in');
  }
};
