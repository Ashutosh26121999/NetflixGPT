import {useEffect} from "react";
import {RouterPath} from "../utils/RouterPath";
import {RouterProvider} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/Redux/userSlice";
const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        console.log("user--Logout Body Component");
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={RouterPath} />
    </div>
  );
};

export default Body;
