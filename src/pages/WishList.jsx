import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const WishList = () => {
    const blog = useLoaderData();
    const {id} = useParams();
  const {user} = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData()
  },[])

  const getData = async()=>{
    const {data} = await axios(`http://localhost:5000/wishlist-blog/${user?.email}`)
    setBlogs(data)
  }
//   console.log(blogs)

  const handleDelete = async id => {
    try {
      const {data} = await axios.delete(`http://localhost:5000/blogs/${id}`)
      console.log(data)
      toast.success("Successfully Deleted")
      getData()
    }catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

 
  return (
    <header className="bg-white ">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="">
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem]">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                  Build Your New{" "}
                  <span className="text-blue-600 dark:text-blue-400">Idea</span>
                </h2>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis commodi cum cupiditate ducimus, fugit harum id
                  necessitatibus odio quam quasi, quibusdam rem tempora
                  voluptates.
                </p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <button onClick={() => handleDelete(blogs._id)}
                    href="#"
                    className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Get Started
                  </button>
                  <a
                    href="#"
                    className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          />
        </div>
      </div>
    </header>
  );
};

export default WishList;
