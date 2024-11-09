import { connectMongoDB } from "@/lib/mongodb";
import User, { validateUserSchema } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const body = await request.json();
    const validation = validateUserSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

    await User.create(body);

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
