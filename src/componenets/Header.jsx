import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DEFULT_IMAGE} from "../utils/constentValue";

const Header = () => {
  // get user from store
  const {email, photoURL, displayName} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const signOutFunction = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error in sign out", error);
      });
  };
  return (
    <div className='absolute top-0 left-0 w-screen py-2 px-8 bg-gradient-to-b from-black to-transparent'>
      <img
        className='w-45'
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='netflix logo'
      />
      {/* user icon container */}
      {email && (
        <div className='absolute right-5 top-5 flex items-center gap-3'>
          <img
            className='w-10 rounded-full'
            src={photoURL ? photoURL : DEFULT_IMAGE}
            alt='user icon'
          />
          {displayName && (
            <span className='text-white font-bold'>{displayName}</span>
          )}
          {/* Siging out Button */}
          <button
            className='text-white bg-red-600 py-2 px-4 text-center rounded-md font-bold'
            onClick={signOutFunction}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
