import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter.jsx";
import publicRouter from "./publicRouter.jsx";
import Layouts from "../layouts/Layouts.jsx";

// create router
const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [...publicRouter, ...privateRouter],
  },
]);

// export router
export default router;
