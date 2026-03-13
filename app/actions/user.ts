"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function inviteUser(email: string, role: string) {
  try {
    const client = await clerkClient();
    await client.invitations.createInvitation({
      emailAddress: email,
      publicMetadata: {
        role: role,
      },
      ignoreExisting: true,
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    console.error("Invitation error:", error);
    return { success: false, error: error.message };
  }
}

export async function updateUserRole(userId: string, role: string) {
  try {
    const client = await clerkClient();
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: role,
      },
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    console.error("Update role error:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteUser(userId: string) {
  try {
    const client = await clerkClient();
    await client.users.deleteUser(userId);
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    console.error("Delete user error:", error);
    return { success: false, error: error.message };
  }
}
