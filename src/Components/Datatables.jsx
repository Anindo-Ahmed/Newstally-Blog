import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const DataTables = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        const blogsData = res.data;

        // calculate the word count from long_description of a blog
        const wordCount = blogsData.map((blog, i) => ({
          ...blog,
          words: blog.long_description.split(/\s+/).length,
          serialNumber: i + 1,
        }));

        // sort each blog in decending order
        const sortBlogs = wordCount.sort((a, b) => b.words - a.words);

        // top 10 blogs
        const top10Blogs = sortBlogs.slice(0, 10);

        setBlogs(top10Blogs);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const columns = [
    {
      name: "Serial No.",
      selector: (row) => row.serialNumber,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Owner",
      selector: (row) => row.owner?.name,
      sortable: true,
    },
    {
      name: "Profile Picture",
      selector: (row) => row.image,
      cell: (row) => (
        <img
          src={row.owner?.photo}
          alt={row.title}
          className=" h-12 w-12 rounded-full"
        />
      ),
    },
  ];

  return (
    <div className="container lg:px-20 mx-auto my-12">
      <DataTable
        title="Top Featured Blogs"
        columns={columns}
        data={blogs}
        highlightOnHover
        striped
        // pagination
      />
    </div>
  );
};

export default DataTables;
