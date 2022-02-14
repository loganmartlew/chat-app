import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

const provider = new FacebookAuthProvider();

export const signInWithFacebook = async () => {
  const auth = getAuth();

  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(err);
    throw new Error('Facebook sign in failed');
  }
};
