import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth';
import './config';
const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
//login with googlw
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token, 'token');
    const user = result.user;
    console.log(user, 'user');
    console.log(user.displayName, 'user.displayName', user.email);
    return new Promise((resolve) => {
      resolve(user);
    });
  } catch (error) {
    console.log(error);
  }
};

//login with facebook
export const loginWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookAuthProvider);
    const user = result.user;
    console.log(user, 'user');
    return { email: user.email, name: user.displayName, photo: user.photoURL };
  } catch (error) {
    console.log(error);
  }
};

//login with github
export const loginWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubAuthProvider);
    const user = result.user;
    return { email: user.email, name: user.displayName, photo: user.photoURL };
  } catch (error) {
    console.log(error);
  }
};

//invisible reCAPTCHA
const generateRecaptcha = () => {
  console.log(auth, 'auth');
  console.log('generateRecaptcha');
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        console.log(response, 'response', 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
      }
    },
    auth
  );
};
export const requestOTP = async (phone) => {
  try {
    console.log('+972' + phone.slice(1));
    const phoneNumber = '+972' + phone.slice(1);
    generateRecaptcha();
    console.log('requestOTP Hiiiiiiiiiiii');
    const appVerifi = window.recaptchaVerifier;
    console.log(auth, ' authhhhhhhhhhhhh');
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifi);
    console.log(confirmationResult, 'confirmationResult');
    window.confirmationResult = confirmationResult;
  } catch (error) {
    console.log(error);
  }
};
// export const verifyOTP = async () => {
//   try {
//     if (code.length === 6) {
//       const confirmationResult = window.confirmationResult;
//       confirmationResult
//         .confirm(code)
//         .then((result) => {
//           // User signed in successfully.
//           const user = result.user;
//           console.log('User signed in successfully', result, user);
//           // ...
//         })
//         .catch((error) => {
//           // User couldn't sign in (bad verification code?)
//           console.log(error);
//         });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
