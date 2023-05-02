import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import HomeLayout from "../layout/HomeLayout";
import Recipe from "../pages/Recipe/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: ":id",
        element: <Recipe></Recipe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

export default router;
