import { connectMongoDB } from "@/lib/mongodb";
import Artwork, { ArtworkType } from "@/models/Artwork";
import GalleryClient from "./GalleryClient";

const Gallery = async () => {
  await connectMongoDB();

  // Retrieve data from MongoDB
  const result = await Artwork.find();

  // Serialize data to JSON
  const artworks: ArtworkType[] = result.map((doc) =>
    JSON.parse(JSON.stringify(doc))
  );

  return <GalleryClient artworks={artworks} />;
};

export const dynamic = "force-dynamic";

export default Gallery;
