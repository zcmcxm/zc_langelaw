"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ArtworkImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageWrapper: React.FC<ArtworkImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className={`${
          !loaded ? "opacity-0" : "opacity-100"
        }} max-w-md max-h-150 object-contain`}
        onLoadingComplete={() => setLoaded(true)}
      />
      {!loaded && <div className="skeleton h-56 w-48"></div>}
    </div>
  );
};

export default ImageWrapper;
