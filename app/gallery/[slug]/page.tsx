import { connectMongoDB } from "@/lib/mongodb";
import Artwork, { ArtworkType } from "@/models/Artwork";
import { Suspense } from "react";
import { GallerySkeleton } from "../GalleryClient";
import React from "react";
import Image from "next/image";

const ArtworkPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  await connectMongoDB();
  const result = await Artwork.findOne({ _id: slug });

  if (!result) {
    return {
      notFound: true,
    };
  }

  const artwork: ArtworkType = JSON.parse(JSON.stringify(result));

  // Format the created date to a more readable format
  const formattedDate = new Date(artwork.created_date).toLocaleDateString();

  return (
    <Suspense fallback={<GallerySkeleton />}>
      <div className="flex flex-col sm:flex-row w-4/5 justify-start sm:justify-center items-start gap-x-12 gap-y-14 mx-auto mt-16 mb-28">
        <div className="w-full sm:w-3/5 mx-auto">
          <Image
            src={artwork.pic_url}
            alt={artwork.title}
            width={800} // Set a default width to control Image component's layout
            height={600} // Set a default height to control Image component's layout
            layout="responsive"
            className="object-contain w-full sm:max-w-[40vw] max-h-[60vh]"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-lg sm:text-2xl font-semibold">
            {artwork.title}
          </div>
          <div className="text-primary text-sm sm:text-lg italic font-serif">
            {artwork.author} {formattedDate}
          </div>
          <div className="text-base sm:text-lg">
            {artwork.introduction.split("\\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ArtworkPage;
