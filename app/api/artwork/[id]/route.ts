import { connectMongoDB } from "@/lib/mongodb";
import Artwork, { validateArtworkSchema } from "@/models/Artwork";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  await connectMongoDB();
  const artwork = await Artwork.findOne({ _id: id });

  //TODO: handle no result found

  return NextResponse.json({ artwork }, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const body = await request.json();
  const validation = validateArtworkSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  await connectMongoDB();
  await Artwork.findByIdAndUpdate(id, { ...body });

  //TODO: handle no result found

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;

    await Artwork.findByIdAndDelete(id);

    //TODO: handle no result found

    return NextResponse.json({ message: "Artwork Deleted." }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
