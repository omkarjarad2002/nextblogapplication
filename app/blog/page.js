"use client";
import React, { useState } from "react";

const page = ({ serverData }) => {
  const [blogs, setBlogs] = useState(serverData);
  console.log("blogs", blogs);
  // const [blogs, setBlogs] = useState([]);
  // const getAllBlogs = async () => {
  //   try {
  //     const data = await axios.get("http://localhost:4000/getallblogs");
  //     setBlogs(data.data.data);
  //     console.log(data.data.data);
  //   } catch (error) {
  //     window.alert(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllBlogs();
  // }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold  mb-12">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* {serverData.map((blog) => (
            <div className="dark:border-2 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={`http://localhost:4000/uploads/${blog.file}`}
                alt="Blog Post 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {blog.description.split(" ").slice(0, 5).join(" ")}...
                </p>
                <a
                  href={`/blogpost/${blog._id}`}
                  className="text-blue-500 hover:underline mt-4 inline-block font-medium cursor-pointer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default page;
