import mongoose, { Schema } from "mongoose";
import { z } from "zod";

const artworkSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 128,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  introduction: {
    type: String,
    required: true,
  },
  illustration: {
    type: String,
    required: true,
    maxlength: 128,
  },
  pic_url: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "Zhang Chi",
    maxlength: 50,
  },
});

const Artwork =
  mongoose.models.Artwork || mongoose.model("Artwork", artworkSchema);

export const validateArtworkSchema = z.object({
  title: z.string().max(128),
  created_date: z.coerce.date(),
  updated_date: z.coerce.date(),
  illustration: z.string().max(128),
  introduction: z.string(),
  pic_url: z.string(),
  author: z.string().max(50),
});

export interface ArtworkType {
  _id: string;
  title: string;
  created_date: Date;
  updated_date: Date;
  introduction: string;
  illustration: string;
  pic_url: string;
  author?: string;
}

export default Artwork;
