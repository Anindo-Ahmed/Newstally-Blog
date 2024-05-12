import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const BlogsDetails = () => {
    const { user } = useAuth();
    const blogs = useLoaderData()
    return (
        <div>
            <h2>Blog details</h2>
        </div>
    );
};

export default BlogsDetails;