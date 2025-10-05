"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArtworkType } from "@/models/Artwork";
import { formatDate } from "@/utils";

type GalleryClientProps = {
  artworks: ArtworkType[];
};

const GalleryClient: React.FC<GalleryClientProps> = ({ artworks }) => {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col gap-2 mt-16">
          <div className="text-2xl sm:text-4xl font-bold">Gallery</div>
          {/* <div className="relative w-28 h-28 sm:w-36 sm:h-32">
            <Image
              src="/gallery-eng.png"
              alt="Gallery"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div> */}
          <div className="text-base sm:text-xl font-serif">我书意造本无法</div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-y-16 gap-x-8 mt-16 mb-28">
          {artworks.map((artwork) => {
            const formattedDate = formatDate(new Date(artwork.created_date));
            return (
              <div
                key={artwork.title}
                className="flex flex-col
                 w-full sm:w-1/2 box-border max-w-sm items-center cursor-pointer"
              >
                <Suspense fallback={<GallerySkeleton />}>
                  <Link key={artwork._id} href={`/gallery/${artwork._id}`}>
                    <Image
                      alt={artwork.title}
                      src={artwork.pic_url}
                      width={800} // Set a default width to control Image component's layout
                      height={600} // Set a default height to control Image component's layout
                      layout="responsive"
                      className="object-contain max-w-full max-h-100 transition-transform duration-300 transform hover:opacity-90 hover:shadow-lg"
                    />
                    <div className="flex flex-wrap gap-x-4 items-baseline text-lg sm:text-xl mt-8 font-medium text-primary transition-transform duration-300 transform hover:opacity-60">
                      {artwork.title}
                      <p className="text-sm sm:text-base font-serif">
                        {formattedDate}
                      </p>
                    </div>
                    <div className="text-sm sm:text-base mt-1 font-serif font-light opacity-60 hover:opacity-40">
                      {artwork.illustration}
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

export const GallerySkeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default GalleryClient;
