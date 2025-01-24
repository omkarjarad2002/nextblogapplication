// pages/about.js
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-4xl font-bold  mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Welcome to our blog! We are passionate about sharing knowledge and
        insights on various topics. Our team consists of experienced writers and
        enthusiasts who strive to provide valuable content to our readers.
      </p>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold   mb-2">Our Mission</h2>
        <p className="text-md text-gray-500 mb-4 text-center max-w-xl">
          Our mission is to inspire and educate our audience through engaging
          articles, tutorials, and discussions. We believe in the power of
          knowledge and aim to create a community of learners.
        </p>
        <h2 className="text-2xl font-semibold  mb-2">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-gray-500">Lead Writer</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg">Jane Smith</h3>
            <p className="text-gray-500">Editor</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg">Alice Johnson</h3>
            <p className="text-gray-500">Content Strategist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
