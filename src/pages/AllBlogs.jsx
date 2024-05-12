import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AllBlogs = () => {
    const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);

  const { title, category, photo, short_description, long_description } = blogs;
  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        const blogsData = res.data;
        console.log(blogsData);
        setBlogs(blogsData);
      })
      .catch((error) => console.log(error.message));
  }, []);
  console.log(blogs);

  const handleAddToWishList = () => {
    const wishListData = {
      title,
      category,
      photo,
      short_description,
      long_description,
      user,
    };
    console.log(wishListData)

    axios
      .post("http://localhost:5000/wishlist-blog", wishListData)
      .then((res) => console.log("Blog added to wishlist", res.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-20 mx-auto my-12">
      {blogs.map((blog) => (
        <div>
          <section className="bg-white">
            <div className="container md:px-3 mx-auto">
              <div>
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={blog.photo}
                  alt=""
                />

                <div className="mt-8">
                  <span
                    className={`text-gray-700 text-sm border px-4 py-1 rounded-full
                      ${blog.category === "Sports" && "bg-violet-200"} 
                      ${blog.category === "Lifestyle" && "bg-pink-200"}
                      ${blog.category === "Business" && "bg-blue-200"} `}
                  >
                    {blog.category}
                  </span>

                  <h1 className="mt-4 text-xl font-semibold text-gray-800">
                    {blog.title}
                  </h1>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {blog.short_description}
                  </p>

                  <div className="flex items-center justify-center my-4 mb-8">
                    <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse ">
                      <button className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                        Details
                      </button>
                      <Link to="/wishlist-blog">
                        <button
                            onClick={handleAddToWishList}
                          className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110"
                        >
                          Wishlist
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
