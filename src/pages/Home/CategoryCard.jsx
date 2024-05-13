import axios from "axios";
import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

const CategoryCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, category, photo, short_description, long_description } = blog;

  const handleAddToWishList = () => {
    const wishListData = {
      title,
      category,
      photo,
      short_description,
      long_description,
      user,
    };

    axios
      .post("http://localhost:5000/wishlist-blog", wishListData)
      .then((res) => console.log("Blog added to wishlist", res.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <section className="bg-white">
      <div className="container md:px-3 mx-auto">
        <div>
          <motion.img
            className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
            src={photo}
            alt=""
            whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
          />

          <div className="mt-8">
            <span
              className={`text-gray-700 text-sm border px-4 py-1 rounded-full
            ${category === "Sports" && "bg-violet-200"} ${
                category === "Lifestyle" && "bg-pink-200"
              } ${category === "Business" && "bg-blue-200"} `}
            >
              {category}
            </span>

            <h1 className="mt-4 text-xl font-semibold text-gray-800">
              {title}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {short_description || <Skeleton count={3} />}
            </p>

            <div className="flex items-center justify-center my-4 mb-8">
              <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse ">
                <Link to={`/blogs/${_id}`} className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                  Details
                </Link>
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
  );
};

export default CategoryCard;
