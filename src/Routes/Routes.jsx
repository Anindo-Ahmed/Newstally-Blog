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
import AllBlogs from "../pages/AllBlogs";
import AllBlog from "../pages/AllBlog";
import BlogsDetails from "../pages/BlogsDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:() => fetch('https://newstally-server.vercel.app/blogs')
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
          element: <PrivateRoutes><MyBlogs></MyBlogs></PrivateRoutes>
        },
        {
          path: '/all-blogs',
          // element: <AllBlogs></AllBlogs>
          element: <AllBlog></AllBlog>
        },
        {
          path: '/update/:id',
          element: <UpdateBlog></UpdateBlog>,
          loader: ({params}) => fetch(`https://newstally-server.vercel.app/blogs/${params.id}`)
          // loader:() => fetch('https://newstally-server.vercel.app/blogs')
        },
        {
          path: '/blogs/:id',
          element: <BlogsDetails></BlogsDetails>,
          // loader: ({params}) => fetch(`https://newstally-server.vercel.app/blog/${params.id}`)
          loader:() => fetch('https://newstally-server.vercel.app/blogs')
        },
        {
          path: '/featured-blog',
          element: <FeaturedBlog></FeaturedBlog>,
          loader:() => fetch('https://newstally-server.vercel.app/blogs')
        },
        {
          path: '/wishlist-blog',
          element: <PrivateRoutes><WishList></WishList></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;