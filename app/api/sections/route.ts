import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const section = searchParams.get("section");

  try {
    if (page && section) {
      const entry = await prisma.pageSection.findUnique({
        where: { page_section: { page, section } },
      });
      return NextResponse.json(entry || {});
    }

    const sections = await prisma.pageSection.findMany();
    return NextResponse.json(sections);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch sections" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { page, section, content } = await req.json();

    const entry = await prisma.pageSection.upsert({
      where: { page_section: { page, section } },
      update: { content },
      create: { page, section, content },
    });
    return NextResponse.json(entry);
  } catch (error) {
    return NextResponse.json({ error: "Failed to save section" }, { status: 500 });
  }
}
