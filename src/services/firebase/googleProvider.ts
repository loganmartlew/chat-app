import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const auth = getAuth();

  try {
    await signInWithPopup(auth, provider);
  } catch (_) {
    throw new Error('Google sign in failed');
  }
};
