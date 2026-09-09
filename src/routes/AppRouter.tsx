import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from ".";

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
