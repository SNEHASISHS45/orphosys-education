import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [courses, team, partners, programs] = await Promise.all([
      prisma.course.count(),
      prisma.teamMember.count(),
      prisma.partner.count(),
      prisma.program.count(),
    ]);

    return NextResponse.json({
      courses,
      team,
      partners,
      programs,
    });
  } catch (error) {
    console.error("Stats API Error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
