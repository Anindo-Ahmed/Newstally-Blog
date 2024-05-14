import bgimg from "../../assets/image/layered-steps-haikei.svg"
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddBlog = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleFormSubmission = async e => {
        e.preventDefault()
        const form = e.target
        const title = form.blog_title.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;

        const blogData = {title, category, photo, short_description, long_description,
            owner: {
                email: user?.email, 
                name: user?.displayName,
                photo: user?.photoURL,
            }};
        console.log(blogData)

        try{
            const {data} = await axios.post('https://newstally-server.vercel.app/blogs', blogData)
            console.log(data)
            toast.success('Successfully added')
            navigate('/')
        }catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }


  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12" 
    style={{
        backgroundImage: `url(${bgimg})`,
      }}>
      <section className=" p-2 md:p-6 my-5 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Create a Blog Post
        </h2>

        <form onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Blog Title
              </label>
              <input
                id="blog_title"
                name="blog_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Image URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Sports">Sports</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Short Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="short_description"
              id="description"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Long Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="long_description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
