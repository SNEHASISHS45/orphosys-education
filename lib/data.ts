import "server-only";
import { prisma } from "./prisma";

export async function getGlobalSettings() {
  try {
    const settings = await prisma.globalSettings.findUnique({
      where: { id: "singleton" },
    });
    return settings || null;
  } catch (error) {
    console.error("Error fetching global settings:", error);
    return null;
  }
}

export async function getPageSection(page: string, section: string) {
  try {
    const data = await prisma.pageSection.findUnique({
      where: { page_section: { page, section } },
    });
    return data?.content || null;
  } catch (error) {
    console.error(`Error fetching page section ${page}/${section}:`, error);
    return null;
  }
}

export async function getCourses() {
  try {
    return await prisma.course.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export async function getTeamMembers() {
  try {
    return await prisma.teamMember.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}

export async function getPartners() {
  try {
    return await prisma.partner.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
}
