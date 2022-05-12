import { GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import './config';
const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
//login with googlw
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token, 'token');
    const user = result.user;
    console.log(user, 'user');
  } catch (error) {
    console.log(error);
  }
};

//login with facebook
export const loginWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookAuthProvider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token, 'token');
    const user = result.user;
    console.log(user, 'user');
  } catch (error) {
    console.log(error);
  }
};
