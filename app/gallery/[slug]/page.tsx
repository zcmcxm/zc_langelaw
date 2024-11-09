import { connectMongoDB } from "@/lib/mongodb";
import Artwork, { ArtworkType } from "@/models/Artwork";
import { Suspense } from "react";
import { GallerySkeleton } from "../GalleryClient";
import React from "react";
import ImageWrapper from "@/components/ImageWrapper";

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
      <div className="flex flex-wrap justify-around items-start gap-y-8 mx-4 my-8">
        <div className="max-w-md max-h-150">
          <ImageWrapper src={artwork.pic_url} alt={artwork.title} />
        </div>

        <div className="flex flex-col gap-3 max-w-96">
          <div className="text-xl font-semibold">{artwork.title}</div>
          <div className="text-primary text-sm">
            {artwork.author} {formattedDate}
          </div>
          <div className="text-sm">
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
