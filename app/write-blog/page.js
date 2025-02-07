"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const page = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    blogType: "",
    userID: "12345", // Placeholder, should come from authentication
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("blogType", formData.blogType);
      formDataToSend.append("userID", formData.userID);
      formDataToSend.append("file", formData.file);

      const res = await axios.post(
        "http://localhost:4000/api/addblog",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 201) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/blogs");
        }, 1500);
      }
    } catch (error) {
      alert("Error uploading blog");
    }
    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-2xl p-6 rounded-lg shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-2"
              placeholder="Enter blog title"
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-2"
              placeholder="Write a short description..."
            />
          </div>

          {/* Blog Type */}
          <div>
            <Label htmlFor="blogType">Blog Type</Label>
            <select
              name="blogType"
              value={formData.blogType}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              <option value="">Select Type</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <Label htmlFor="file">Upload Image</Label>
            <Input
              type="file"
              name="file"
              onChange={handleFileChange}
              required
              className="mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className={`w-full py-2 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                theme === "dark"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-indigo-500 hover:bg-indigo-600"
              } text-white`}
            >
              {loading ? "Submitting..." : "Submit Blog"}
            </Button>
          </div>
        </form>

        {success && (
          <p className="text-green-500 text-center mt-4">
            Blog added successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
