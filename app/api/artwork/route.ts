import { connectMongoDB } from "@/lib/mongodb";
import Artwork, { validateArtworkSchema } from "@/models/Artwork";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const artworks = await Artwork.find();

    return NextResponse.json({ artworks }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const body = await request.json();
    const validation = validateArtworkSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

    await Artwork.create(body);

    return NextResponse.json({ message: "Artwork Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
