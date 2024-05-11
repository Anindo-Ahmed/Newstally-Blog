import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";

const TabCategory = ({blogs}) => {
    
  return (
    <Tabs className="text-center my-28">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl font-lato font-semibold text-gray-800 mt-12">
          Your Favourite Blogs
        </h2>
        
        <div className="flex justify-center items-center my-8 ">
          <TabList>
            <Tab>Sports</Tab>
            <Tab>Lifestyle</Tab>
            <Tab>Business</Tab>
          </TabList>
        </div>

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
