import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const BlogsDetails = () => {
  const { user } = useAuth();
  const blogs = useLoaderData();
  const { id } = useParams();

  const blog = blogs.find((post) => post._id == id);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (user?.email === buyer?.email)
      return toast.error("Action not permitted!");
    const comment = e.target.comment.value;
    const blogData = {
      comment,
    //   job_title,
    //   photo,
    //   category,
    //   buyer,
    };
    // console.table(bidData);

    try {
      const { data } = await axios.post("http://localhost:5000/blogs", blogData);
      toast.success("Successfully Saved in DB");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mb-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
          Read Details
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={blog.photo}
            alt="photo"
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-violet-500 border inline bg-violet-100 rounded-full px-3">
              {blog.category}
            </p>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:bg-gradient-to-r from-violet-200 to-fuchsia-200 hover:scale-105"
            >
              {blog.title}
            </a>

            <p className="mt-3 text-sm text-gray-400 md:text-sm">
              Short Description:{" "}
              <span className="text-gray-600 hover:text-violet-400">
                {blog.short_description}
              </span>
            </p>
            <p className="mt-3 text-sm text-gray-400 md:text-sm">
              Long Description:{" "}
              <span className="text-gray-600 hover:text-violet-400">
                {blog.long_description}
              </span>
            </p>

            <div className="flex items-center mt-6">
              <form onSubmit={handleFormSubmission}>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-gray-700 " htmlFor="description">
                    Comment
                  </label>

                  <div>
                    <div className="flex flex-row items-center">
                      <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={blog?.owner?.photo}
                        alt=""
                      />
                      <h1 className="text-sm text-gray-600 mx-4">
                        {blog?.owner?.name}
                      </h1>
                    </div>
                    <textarea
                      className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      name="comment"
                      placeholder="Add a commnet..."
                      id="description"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="px-4 py-2 rounded text-sm font-medium transition-colors duration-200 sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetails;
