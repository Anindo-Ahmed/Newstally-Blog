import { motion } from "framer-motion";
import banner1 from "../../assets/image/banner1.jpeg";
import { Link } from "react-router-dom";

const Banner = ({ blogs }) => {
  const {title, category, photo, short_description, long_description, owner} = blogs;
  return (
    <section className="bg-white  my-6">
      <div className="container px-4 lg:px-20 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <motion.img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={banner1}
              alt=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            {
              blogs.slice(0, 4).map(blog => <div>
                <Link to='/all-blogs' className="text-blue-500 capitalize">{blog.title}</Link>
  
                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  {blog.short_description.slice(0, 30)}...
                </a>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </div>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
