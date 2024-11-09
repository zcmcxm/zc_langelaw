import { connectMongoDB } from "@/lib/mongodb";
import Blog, { validateBlogSchema } from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find();

    //TODO: handle no result found

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const body = await request.json();
    const validation = validateBlogSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

    await Blog.create(body);

    return NextResponse.json({ message: "Blog Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
