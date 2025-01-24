import React from "react";
import page from "./page.js";

export const BlogServer = async () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  try {
    const data = await axios.get("http://localhost:4000/getallblogs");
    setBlogs(data.data.data);
    console.log(data.data.data);
  } catch (error) {
    window.alert(error);
  }

  return <page serverData={blogs}></page>;
};
