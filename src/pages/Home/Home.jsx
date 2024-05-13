import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TabCategory from "./TabCategory";
import BlogCard from "./BlogCard";
import Newsletter from "./Newsletter";
import AwesomeComponent from "./AwesomeComponent";


const Home = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <Banner blogs={blogs}></Banner>
            <div className="container px-4 lg:px-20 mx-auto">
                <h2 className="text-2xl font-semibold">Favourite Blogs</h2>
                <hr className="border-b-violet-400 border-b-4 mb-3 w-1/6"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container px-4 lg:px-20 mx-auto">
            {
                blogs.slice(0, 6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
            }
            </div>
            <TabCategory blogs={blogs}></TabCategory>
            <Newsletter></Newsletter>
            <AwesomeComponent></AwesomeComponent>
        </div>
    );
};

export default Home;