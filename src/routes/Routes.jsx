import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import HomeLayout from "../layout/HomeLayout";
import Recipe from "../pages/Recipe/Recipe";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: ":id",
        element: <Recipe></Recipe>,
        loader: ({ params }) =>
          fetch(`https://chef-recipe-server-psi.vercel.app/chefs/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
