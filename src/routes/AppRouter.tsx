import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from ".";

const router = createBrowserRouter(routes, {
  basename: "/luxury_presence_assessment",
});

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
