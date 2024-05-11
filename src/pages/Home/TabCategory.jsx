import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";

const TabCategory = ({blogs}) => {
    
  return (
    <Tabs className="text-start my-28 lg:px-20 mx-auto">
      <div className="container px-4 lg:px-20 mx-auto">
        <h2 className="text-2xl md:text-4xl font-lato font-semibold text-gray-800 mt-12">
          Your Favourite Blogs
        </h2>
        <hr className="border-b-violet-400 border-b-4 my-3 w-1/6"/>
        <div className="flex justify-start items-center my-5 mx-auto">
          <TabList>
            <Tab>Sports</Tab>
            <Tab>Lifestyle</Tab>
            <Tab>Business</Tab>
          </TabList>
        </div>
        <hr className="border-b-gray-100 border-b-1 mb-3 w-full"/>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { blogs.filter(b => b.category === 'Sports').map(blog => <CategoryCard key={blog._id} blog={blog}/>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { blogs.filter(b => b.category === 'Lifestyle').map(blog => <CategoryCard key={blog._id} blog={blog}/>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { blogs.filter(b => b.category === 'Business').map(blog => <CategoryCard key={blog._id} blog={blog}/>)}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategory;
