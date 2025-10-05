import { connectMongoDB } from "@/lib/mongodb";
import Blog, { BlogType } from "@/models/Blog";
import { BlogsSkeleton } from "../BlogsClient";
import { Suspense } from "react";
import React from "react";
import { formatDate } from "@/utils/date";
import Image from "next/image";

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
          {blog.content.split(/(\[img:[^\]]+\])/).map((part, index) => {
            const imgMatch = part.match(/^\[img:(.+)\]$/);
            if (imgMatch) {
              return (
                <Image
                  key={index}
                  src={imgMatch[1]}
                  alt={blog.title}
                  width={800} // Set a default width to control Image component's layout
                  height={600} // Set a default height to control Image component's layout
                  layout="responsive"
                  className="object-contain w-full sm:max-w-[40vw] max-h-[60vh]"
                />
              );
            }
            // Handle bold text: split by <b>...</b>
            const boldRegex = /(<b>.*?<\/b>)/g;
            const segments = part.split(boldRegex);
            return (
              <div key={index}>
                {segments.map((seg, segIdx) => {
                  const boldMatch = seg.match(/^<b>(.*?)<\/b>$/);
                  if (boldMatch) {
                    return (
                      <span key={segIdx} className="italic font-black">
                        {boldMatch[1]}
                      </span>
                    );
                  }
                  // Handle line breaks
                  return seg.split("\\n").map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ));
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default BlogPage;
