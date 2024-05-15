import Swal from "sweetalert2";


const Newsletter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        if(email){
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thank you for subscribing to our newsletter!",
          });
          e.target.reset()
        }
    }
    
  return (
    <header className="container lg:px-20 mx-auto bg-base-200">
      <div className="container px-6 py-6 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-violet-400 lg:text-4xl">
                Subscribe To The <span className="text-blue-500">Newsletter</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                be the first to knows when our{" "}
                <span className="font-medium text-blue-500">Blog</span> is live
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  name='email'
                  className="px-4 py-2 text-gray-700 border rounded-md  focus:border-violet-300 focus:ring focus:ring-opacity-60 focus:ring-violet-300"
                  placeholder="Email Address"
                />

                <button  className="px-4 py-2 text-sm font-medium transition-colors rounded-lg duration-200 sm:text-base sm:px-6 text-white bg-gradient-to-r from-violet-400 to-fuchsia-400 hover:scale-110">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Newsletter;
