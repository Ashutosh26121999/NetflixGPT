import {RouterPath} from "../utils/RouterPath";
import {RouterProvider} from "react-router-dom";

const Body = () => {
  console.log("RouterPath", RouterPath);
  return (
    <div>
      <RouterProvider router={RouterPath} />
    </div>
  );
};

export default Body;
