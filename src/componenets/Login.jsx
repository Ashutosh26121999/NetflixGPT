import {useRef, useState} from "react";
import Header from "./Header";
import {checkValidation} from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/Redux/userSlice";
import {MY_GITHUB_IMAGE, NETFLIX_BACKGROUND} from "../utils/constentValue";
const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const handletoggle = () => {
    setSignUp(!signUp);
    setErrorMessage(null);
  };
  const signUpFunction = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Firebase user", user);
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: {MY_GITHUB_IMAGE},
        })
          .then(() => {
            // Profile updated!
            // ...
            const {uid, email, displayName, photoURL} = auth.currentUser;

            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
          })
          .catch((error) => {
            // An error occurred
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(
              "Profile Update error--" + errorCode + "-----" + errorMessage,
            );
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Signup error--" + errorCode + "-----" + errorMessage);
      });
  };
  const loginFunction = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Login error--" + errorCode + "-----" + errorMessage);
      });
  };
  const handleButtonClick = () => {
    setErrorMessage(() => "");
    if (signUp && (!name.current || !name.current.value.trim())) {
      return setErrorMessage("Full name is required");
    }
    const validationResult = checkValidation(
      email.current.value,
      password.current.value,
      signUp && name.current.value,
    );
    if (validationResult) {
      return setErrorMessage(validationResult);
    }
    if (signUp) {
      // Sign up logic
      signUpFunction();
    } else {
      // Login logic
      loginFunction();
    }
  };
  return (
    <div className='relative h-screen bg-black'>
      {/* Header */}
      <div className='relative z-20'>
        <Header />
      </div>

      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <img
          src={NETFLIX_BACKGROUND}
          alt='Netflix background'
          className='w-full h-full object-cover opacity-60'
        />
      </div>

      {/* Login Form */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[28rem] bg-black/75 text-white p-8 rounded-md shadow-lg z-30'>
        <h2 className='text-3xl font-bold mb-6'>
          {signUp ? "Sign Up" : "Sign In"}
        </h2>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e) => e.preventDefault()}
        >
          {signUp && (
            <input
              type='text'
              placeholder='Full Name'
              className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
              ref={name}
            />
          )}
          <input
            type='text'
            placeholder='Email or phone number'
            className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
            ref={email}
          />
          <input
            type='password'
            placeholder='Password'
            className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
            ref={password}
          />
          {errorMessage && (
            <p className='text-red-500 text-md mt-2 text-wrap text-justify font-bold '>
              {errorMessage}
            </p>
          )}
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 py-3 rounded-md font-semibold'
            onClick={handleButtonClick}
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className='flex justify-between items-center text-sm text-gray-400 mt-4'>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            Remember me
          </label>
          <a href='/' className='hover:underline'>
            Need help?
          </a>
        </div>
        <div className='mt-6 text-gray-400 text-sm'>
          <p>
            {signUp ? "Already have an account? " : " New to Netflix? "}
            <a className='text-white hover:underline' onClick={handletoggle}>
              {signUp ? "Sign In" : "Sign up now"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
