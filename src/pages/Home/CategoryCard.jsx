import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const CategoryCard = ({ blog }) => {
  const {user} = useContext(AuthContext);
  const { title, category, photo, short_description, long_description } =
    blog;

    const handleAddToWishList = () => {
      const wishListData = {
        title, category, photo, short_description, long_description, user
      };
      
      axios.post('http://localhost:5000/wishlist-blog', wishListData)
      .then(res => console.log('Blog added to wishlist', res.data))
      .catch (error => console.log(error.message))     
    };

    
  return (
    <section className="bg-white">
      <div className="container md:px-3 mx-auto">
        <div className="flex items-center justify-between"></div>
        <div>
          <img
            className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
            src={photo}
            alt=""
          />

          <div className="mt-8">
            <span className="text-gray-500 text-sm border rounded-full bg-violet-100 px-4 py-1">
              {category}
            </span>

            <h1 className="mt-4 text-xl font-semibold text-gray-800">{title}</h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {short_description}
            </p>

            <div className="flex items-center justify-center my-4 mb-8">
              <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse ">
                <button className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                  Details
                </button>
                <Link to='/wishlist-blog'>
                <button onClick={handleAddToWishList} className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
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
