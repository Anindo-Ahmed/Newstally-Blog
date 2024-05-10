const BlogCard = ({blog}) => {
    const {title, category, photo_url, short_description, long_description} = blog;
   
  return (
    <section className="bg-base-200 px-3 text-gray-600">
      <div className="container  mx-auto">  
        <div className="  ">
          <div className="lg:flex items-center">
            <img
              className="object-cover w-full h-28 rounded-lg lg:w-1/3"
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="" 
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p className="hover:text-violet-500 font-bold border-b-violet-700 border-b-2 w-1/3">{category}</p>
              <a
                href="#"
                className="text-sm font-semibold hover:underline mt-3 hover:text-violet-500"
              >
                {title}
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600 mt-3">
                On: 20 October 2019
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
