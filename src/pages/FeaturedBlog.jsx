import { useLoaderData } from "react-router-dom";
import { useReactTable } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

const FeaturedBlog = () => {
  const blogs = useLoaderData();
  const { _id, title, owner } = blogs || {};
  console.log(blogs);

  const data = React.useMemo(() => {
    return blogs.map((blog, index) => ({
      serialNumber: index + 1,
      title: title,
      owner: owner?.name,
      profilePicture: owner?.photo,
    }));
  }, [blogs]);

  const columns = React.useMemo(
    () => [
      {
        header: "Serial Number",
        accessor: "serialNumber",
      },
      {
        header: "Blog Title",
        accessor: "title",
      },
      {
        header: "Blog Owner",
        accessor: "owner",
      },
      {
        header: "Profile Picture",
        accessor: "profilePicture",
        Cell: ({ value }) => (
          <Image src={value} alt="Profile" width={50} height={50} />
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useReactTable({
      columns,
      data,
    });

  return (
    <div>
      <h1>Blog Table</h1>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlog;
