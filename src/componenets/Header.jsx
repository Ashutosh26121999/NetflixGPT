import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DEFULT_IMAGE} from "../utils/constentValue";
import {useEffect} from "react";
import {addUser, removeUser} from "../utils/Redux/userSlice";
import {toggleGPTSearch, clearGPTSearchResult} from "../utils/Redux/gptSlice";
import LanguageDropDown from "./LanguageDropDown";
import {useTranslation} from "react-i18next";

const Header = () => {
  // get user from store
  const {email, photoURL, displayName} = useSelector((state) => state.user);
  const showGPTSearch = useSelector((state) => state?.gpt?.showGPTSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe from the authentication state changes on unmount
    return () => unsubscribe();
  }, []);
  const signOutFunction = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Error in sign out", error);
      });
  };
  const handleGPTSearch = () => {
    dispatch(clearGPTSearchResult());
    // gpt search toggale switcher
    dispatch(toggleGPTSearch());
  };
  return (
    <div className='absolute top-0 left-0 w-screen py-2 px-8 bg-gradient-to-b from-black to-transparent'>
      <img
        className='w-40'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='Netflix Logo'
      />
      {/* user icon container */}
      {email && (
        <div className='absolute right-5 top-5 flex items-center gap-3'>
          {/* GPT search  */}
          <button
            className={`text-white font-bold text-lg ${
              showGPTSearch ? "bg-red-700" : "bg-red-600"
            } py-2 px-4 text-center rounded-md hover:bg-red-600 ease-in-out duration-300`}
            onClick={handleGPTSearch}
          >
            {showGPTSearch ? t("homePage") : t("gptSearch")}
          </button>
          <img
            className='w-10 rounded-full'
            src={photoURL ? photoURL : DEFULT_IMAGE}
            alt={t("userIcon")}
          />
          {displayName && (
            <span className='text-white font-bold'>{displayName}</span>
          )}
          {/* Siging out Button */}
          <button
            className='text-white bg-red-600 py-2 px-4 text-center rounded-md font-bold'
            onClick={signOutFunction}
          >
            {t("signOut")}
          </button>
          <LanguageDropDown />
        </div>
      )}
    </div>
  );
};

export default Header;
