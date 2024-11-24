"use client";

import Link from "next/link";
import { Suspense } from "react";
import { BlogType } from "@/models/Blog";
import { formatDate } from "@/utils";

type BlogsClientProps = {
  blogs: BlogType[];
};

const BlogsClient: React.FC<BlogsClientProps> = ({ blogs: blogs }) => {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col gap-2 mt-16">
          <div className="text-2xl sm:text-4xl font-bold">Blog</div>
          <div className="text-base sm:text-xl font-serif">随写随记</div>
        </div>

        <div className="flex flex-col items-start gap-y-8 my-16">
          {blogs.map((blog) => {
            const formattedDate = formatDate(new Date(blog.created_date));
            return (
              <div
                key={blog.title}
                className="flex flex-col
                       box-border items-start cursor-pointer"
              >
                <Suspense fallback={<BlogsSkeleton />}>
                  <Link key={blog._id} href={`/blogs/${blog._id}`}>
                    <div className="flex flex-wrap gap-x-4 items-baseline text-lg sm:text-xl font-medium text-primary transition-transform duration-300 transform hover:opacity-60">
                      {blog.title}
                      <p className="text-sm sm:text-base font-serif">
                        {formattedDate}
                      </p>
                    </div>
                    <div className="text-sm sm:text-base mt-1 font-serif font-light">
                      {blog.abstract}
                    </div>
                  </Link>
                </Suspense>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const BlogsSkeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default BlogsClient;
