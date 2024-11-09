import mongoose, { Schema } from "mongoose";
import { z } from "zod";

const blogSchema = new Schema({
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
  abstract: {
    type: String,
    required: true,
    maxlength: 256,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "Zhang Chi",
    maxlength: 50,
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export const validateBlogSchema = z.object({
  title: z.string().max(128),
  created_date: z.coerce.date(),
  updated_date: z.coerce.date(),
  abstract: z.string().max(256),
  content: z.string(),
  author: z.string().max(50),
});

export interface BlogType {
  _id: string;
  title: string; // Required with max length of 128
  created_date?: Date; // Optional, default is Date.now
  updated_date?: Date; // Optional, default is Date.now
  abstract: string; // Required with max length of 256
  content: string; // Required
  author?: string; // Optional, default is "Zhang Chi" with max length of 50
}

export default Blog;
