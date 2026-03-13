import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    // Search across multiple entities in parallel
    const [courses, team, partners, programs] = await Promise.all([
      prisma.course.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { slug: { contains: query, mode: "insensitive" } },
            { shortDesc: { contains: query, mode: "insensitive" } },
            { category: { contains: query, mode: "insensitive" } },
          ],
        },
        select: { id: true, title: true, slug: true, category: true },
        orderBy: { updatedAt: "desc" },
        take: 5,
      }),
      prisma.teamMember.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { role: { contains: query, mode: "insensitive" } },
            { bio: { contains: query, mode: "insensitive" } },
          ],
        },
        select: { id: true, name: true, role: true },
        orderBy: { updatedAt: "desc" },
        take: 5,
      }),
      prisma.partner.findMany({
        where: {
          name: { contains: query, mode: "insensitive" },
        },
        select: { id: true, name: true },
        orderBy: { updatedAt: "desc" },
        take: 5,
      }),
      prisma.program.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { shortDesc: { contains: query, mode: "insensitive" } },
            { desc: { contains: query, mode: "insensitive" } },
          ],
        },
        select: { id: true, title: true },
        orderBy: { updatedAt: "desc" },
        take: 5,
      }),
    ]);

    // Flatten and tag results
    const results = [
      ...courses.map((item) => ({
        id: item.id,
        title: item.title,
        subtitle: item.category || "Course",
        type: "Course",
        url: `/admin/courses/${item.id}`,
        icon: "BookOpen",
      })),
      ...team.map((item) => ({
        id: item.id,
        title: item.name,
        subtitle: item.role,
        type: "Team Member",
        url: `/admin/team/${item.id}`,
        icon: "Users",
      })),
      ...programs.map((item) => ({
        id: item.id,
        title: item.title,
        subtitle: "Core Program",
        type: "Program",
        url: `/admin/programs`,
        icon: "Sparkles",
      })),
      ...partners.map((item) => ({
        id: item.id,
        title: item.name,
        subtitle: "Affiliated Partner",
        type: "Partner",
        url: `/admin/partners`,
        icon: "Handshake",
      })),
    ];

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
