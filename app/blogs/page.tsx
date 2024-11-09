import React from "react";
import { connectMongoDB } from "@/lib/mongodb";
import Blog, { BlogType } from "@/models/Blog";
import BlogsClient from "./BlogsClient";

const Blogs = async () => {
  await connectMongoDB();

  // Retrieve data from MongoDB
  const result = await Blog.find();

  // Serialize data to JSON
  const blogs: BlogType[] = result.map((doc) => {
    return JSON.parse(JSON.stringify(doc));
  });

  return <BlogsClient blogs={blogs} />;
};

export const dynamic = "force-dynamic";

export default Blogs;
