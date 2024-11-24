import { connectMongoDB } from "@/lib/mongodb";
import Blog, { BlogType } from "@/models/Blog";
import { BlogsSkeleton } from "../BlogsClient";
import { Suspense } from "react";
import React from "react";
import { formatDate } from "@/utils/date";

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  await connectMongoDB();
  const result = await Blog.findOne({ _id: slug });

  if (!result) {
    return {
      notFound: true,
    };
  }

  const blog: BlogType = JSON.parse(JSON.stringify(result));

  // Format the created date to a more readable format
  const formattedDate = formatDate(new Date(blog.created_date));

  return (
    <Suspense fallback={<BlogsSkeleton />}>
      <div className="flex flex-col gap-3 max-w-80-per mx-auto my-16 gap-y-4">
        <div className="text-xl sm:text-2xl font-semibold">{blog.title}</div>
        <div className="text-primary text-sm sm:text-base italic flex flex-wrap gap-x-3 font-serif mt-4">
          {blog.author}
          <p>{formattedDate}</p>
        </div>
        <div className="text-base sm:text-lg mt-8">
          {blog.content.split("\\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default BlogPage;
