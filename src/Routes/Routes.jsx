import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddBlog from "../pages/Home/AddBlog";
import UpdateBlog from "../pages/UpdateBlog";
import FeaturedBlog from "../pages/FeaturedBlog";
import WishList from "../pages/WishList";
import PrivateRoutes from "./PrivateRoutes";
import MyBlogs from "../pages/MyBlogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:() => fetch('http://localhost:5000/blogs')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Register></Register>
        },
        {
          path: '/add-blog',
          element: <PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>
        },
        {
          path: '/my-blog',
          element: <MyBlogs></MyBlogs>
        },
        {
          path: '/update/:id',
          element: <PrivateRoutes><UpdateBlog></UpdateBlog></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path: '/featured-blog',
          element: <FeaturedBlog></FeaturedBlog>,
          loader:() => fetch('http://localhost:5000/blogs')
        },
        {
          path: '/wishlist-blog',
          element: <WishList></WishList>
        }
      ]
    },
  ]);

  export default router;