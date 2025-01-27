import {createBrowserRouter} from "react-router-dom";
import Browse from "../componenets/Browse";
import Login from "../componenets/Login";

export const RouterPath = createBrowserRouter([
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <Login />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <Login />,
  },
]);
