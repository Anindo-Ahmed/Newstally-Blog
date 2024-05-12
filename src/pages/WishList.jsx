import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `http://localhost:5000/wishlist-blog/${user?.email}`
    );
    setWishListData(data);
    // console.log(data);
  };
  //   console.log(wishListData);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/wishlist-blog/${id}`
      );
      console.log(data, "Successfully Deleted");
      toast.success("Successfully Deleted");
      getData();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section className="bg-white my-12">
      <div className="container px-4 lg:px-20 mx-auto">
        <h2 className="text-2xl font-semibold">My WishLists</h2>
        <hr className="border-b-violet-400 border-b-4 mb-3 w-1/6" />
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container md:px-3 px-20 mx-auto">
          {wishListData.map((wishList) => (
            <div key={wishList._id}>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={wishList.photo}
                alt=""
              />

              <div className="mt-8">
                <span className="text-gray-500 text-sm border rounded-full bg-violet-100 px-4 py-1">
                  {wishList.category}
                </span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  {wishList.title}
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {wishList.short_description}
                </p>

                <div className="flex items-center justify-center my-4 mb-8">
                  <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse ">
                    <button className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                      Details
                    </button>
                    <button
                      onClick={() => handleDelete(wishList._id)}
                      className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110"
                    >
                      Remove Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishList;
