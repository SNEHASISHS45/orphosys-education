import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserList from "./UserList";
import { checkRole } from "@/lib/roles";

export default async function UsersPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/admin/login");
  }

  // Double-check role on server
  const isSuperAdmin = await checkRole("SUPER_ADMIN");
  if (!isSuperAdmin) {
    // Check if they are actually the first user and just haven't been assigned yet
    // This handles the race condition where a new super admin just signed up
    const client = await clerkClient();
    const { totalCount } = await client.users.getUserList({ limit: 1 });
    if (totalCount > 1) {
      redirect("/admin");
    }
  }

  // Fetch users and invitations from Clerk
  const client = await clerkClient();
  const [usersResponse, invitationsResponse] = await Promise.all([
    client.users.getUserList({
      orderBy: "-created_at",
    }),
    client.invitations.getInvitationList({
      status: "pending",
    })
  ]);

  return (
    <UserList 
      users={JSON.parse(JSON.stringify(usersResponse.data))} 
      invitations={JSON.parse(JSON.stringify(invitationsResponse.data))} 
    />
  );
}
