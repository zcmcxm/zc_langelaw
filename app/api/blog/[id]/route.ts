import { connectMongoDB } from "@/lib/mongodb";
import Blog, { validateBlogSchema } from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });

  //TODO: handle no result found

  return NextResponse.json({ blog }, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const body = await request.json();
  const validation = validateBlogSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { ...body });

  //TODO: handle no result found

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;

    await Blog.findByIdAndDelete(id);

    //TODO: handle no result found

    return NextResponse.json({ message: "Blog Deleted." }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
