import DataTable from 'react-data-table-component';

const BlogDataTable = ({blogs}) => {
    console.log(blogs)
    const blog = blogs.map((td, i) => ({ ...td, serialNumber: i+1}));

    const columns = [
        {
          name: 'Serial No.',
          selector: row => row._id,
          sortable: true,
        },
        {
          name: 'Title',
          selector: row => row.title,
          sortable: true,
        },
        {
          name: 'Owner',
          selector: row => row.owner?.name,
          sortable: true,
        },
        {
          name: 'Profile Picture',
          selector: row => row.image,
          cell: row => <img src={row.owner?.photo} alt={row.title} className=' h-12 w-12 rounded-full' />,
        },
      ];
      
    return (
        <div className='container lg:px-20 mx-auto my-12'>
            <DataTable
            title='Featured Blogs'
			columns={columns}
			data={blog.slice(0, 10)}
            highlightOnHover
            striped
            // pagination
		/>
        </div>
    );
};

export default BlogDataTable;