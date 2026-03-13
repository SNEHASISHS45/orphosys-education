import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, slug } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and Slug are required" }, { status: 400 });
    }

    const course = await prisma.course.create({
      data: body,
    });
    return NextResponse.json(course);
  } catch (error) {
    console.error("Course creation error:", error);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}
