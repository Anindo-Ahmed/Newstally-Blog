import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import BlogCard from "./BlogCard";

const TabCategory = ({blogs}) => {
    
  return (
    <Tabs className="text-center ">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl font-lato font-semibold text-gray-800 mt-12">
          Blogs Category
        </h2>
        
        <div className="flex justify-center items-center my-8 ">
          <TabList>
            <Tab>Sports</Tab>
            <Tab>Life Style</Tab>
            <Tab>Business</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* { blogs.filter(b => b.category === 'Sports').map(blog => <BlogCard key={blog._id} blog={blog}/>)} */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* { blogs.filter(b => b.category === 'Lifestyle').map(blog => <BlogCard key={blog._id} blog={blog}/>)} */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* { blogs.filter(b => b.category === 'Business').map(blog => <BlogCard key={blog._id} blog={blog}/>)} */}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategory;
