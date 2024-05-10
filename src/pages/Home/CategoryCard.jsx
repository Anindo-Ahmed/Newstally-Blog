const CategoryCard = ({ blog }) => {
  const { title, category, photo_url, short_description, long_description } =
    blog;

  return (
    <section className="bg-white">
      <div className="container md:px-3 mx-auto">
        <div className="flex items-center justify-between"></div>
        <div>
          <img
            className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
            src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />

          <div className="mt-8">
            <span className="text-gray-500 text-sm border rounded-full bg-violet-100 p-2">
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
                <button className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
