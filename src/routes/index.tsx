import { lazy } from "react";

import RootLayout from "@/layouts/RootLayout";

const HomePage = lazy(() => import("@/pages/Home"));

const routes = [
  {
    path: "/",
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export default routes;
