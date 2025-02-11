import {RouterPath} from "../utils/RouterPath";
import {RouterProvider} from "react-router-dom";

const Body = () => {
  return (
    <div>
      <RouterProvider router={RouterPath} />
    </div>
  );
};

export default Body;
