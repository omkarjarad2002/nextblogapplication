"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"; // Ensure correct import
import { useRouter } from "next/navigation";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const getAllBlogs = async () => {
    try {
      const data = await axios.get("http://localhost:4000/getallblogs");
      setBlogs(data.data.data);
      console.log(data.data.data);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold  mb-12">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
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
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => router.push("/write-blog")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ✍️ Write a New Blog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
