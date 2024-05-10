import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TabCategory from "./TabCategory";
import BlogCard from "./BlogCard";


const Home = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="container px-20 mx-auto underline">
                <h2 className="text-2xl font-semibold">On the Spot</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container px-20 mx-auto">
            {
                blogs.slice(0, 6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
            }
            </div>
            <TabCategory blogs={blogs}></TabCategory>
        </div>
    );
};

export default Home;