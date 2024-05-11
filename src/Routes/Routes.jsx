import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddBlog from "../pages/Home/AddBlog";
import UpdateBlog from "../pages/UpdateBlog";

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
          element: <AddBlog></AddBlog>
        },
        {
          path: '/update/:id',
          element: <UpdateBlog></UpdateBlog>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;