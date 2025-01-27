import {useState} from "react";
import Header from "./Header";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const handletoggle = () => {
    setSignUp(!signUp);
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
          src='https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg'
          alt='Netflix background'
          className='w-full h-full object-cover opacity-60'
        />
      </div>

      {/* Login Form */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[28rem] bg-black/75 text-white p-8 rounded-md shadow-lg z-30'>
        <h2 className='text-3xl font-bold mb-6'>
          {signUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className='flex flex-col gap-4'>
          {signUp && (
            <input
              type='text'
              placeholder='Full Name'
              className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          )}
          <input
            type='text'
            placeholder='Email or phone number'
            className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <input
            type='password'
            placeholder='Password'
            className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 py-3 rounded-md font-semibold'
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
