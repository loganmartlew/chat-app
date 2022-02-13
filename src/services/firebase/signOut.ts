import { getAuth, signOut } from 'firebase/auth';

export default async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
  } catch (_) {
    throw new Error('Failed to sign out');
  }
};
