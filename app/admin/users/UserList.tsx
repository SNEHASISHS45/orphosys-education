"use client";

import { useState } from "react";
import { 
  Plus, 
  Trash2, 
  Mail, 
  Shield, 
  MoreVertical,
  UserPlus
} from "lucide-react";
import { inviteUser, updateUserRole, deleteUser } from "@/app/actions/user";

interface UserListProps {
  users: any[];
  invitations: any[];
}

export default function UserList({ users, invitations }: UserListProps) {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("ADMIN");
  const [loading, setLoading] = useState(false);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await inviteUser(inviteEmail, inviteRole);
    if (res.success) {
      setInviteEmail("");
      setIsInviteOpen(false);
      alert("Invitation sent successfully!");
    } else {
      alert("Error: " + res.error);
    }
    setLoading(false);
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    if (confirm(`Are you sure you want to change this user's role to ${newRole}?`)) {
      const res = await updateUserRole(userId, newRole);
      if (!res.success) alert("Error: " + res.error);
    }
  };

  const handleDelete = async (userId: string) => {
    if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      const res = await deleteUser(userId);
      if (!res.success) alert("Error: " + res.error);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">User Management</h1>
          <p className="text-slate-500 font-medium mt-1">Manage team members, roles, and invitations.</p>
        </div>
        <button 
          onClick={() => setIsInviteOpen(true)}
          className="bg-primary text-white px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
        >
          <UserPlus className="w-5 h-5" />
          Invite User
        </button>
      </div>

      {/* Invite Modal */}
      {isInviteOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Invite New User</h2>
            <form onSubmit={handleInvite} className="space-y-6">
              <div>
                <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Assign Role</label>
                <select 
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-medium"
                >
                  <option value="ADMIN">Administrator</option>
                  <option value="EDITOR">Editor</option>
                  <option value="SUPER_ADMIN">Super Admin</option>
                </select>
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsInviteOpen(false)}
                  className="flex-1 px-4 py-3 rounded-2xl font-black text-slate-500 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-2xl bg-primary text-white font-black shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Invite"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* User Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">User</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Role</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center font-black text-primary">
                        {u.imageUrl ? <img src={u.imageUrl} className="w-full h-full object-cover" /> : u.firstName?.charAt(0) || "U"}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{u.firstName} {u.lastName}</p>
                        <p className="text-slate-400 font-medium">{u.emailAddresses[0].emailAddress}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <select 
                      defaultValue={u.publicMetadata.role || "ADMIN"}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className="bg-slate-100 border-none rounded-lg px-3 py-1 text-xs font-black text-slate-600 outline-none focus:ring-2 ring-primary/20 transition-all"
                    >
                      <option value="SUPER_ADMIN">SUPER ADMIN</option>
                      <option value="ADMIN">ADMIN</option>
                      <option value="EDITOR">EDITOR</option>
                    </select>
                  </td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button 
                      onClick={() => handleDelete(u.id)}
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {invitations.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors opacity-70 italic">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center text-slate-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-400">Pending Invitation</p>
                        <p className="text-slate-400 font-medium">{inv.emailAddress}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-black text-slate-400">
                      {(inv.publicMetadata.role as string || "ADMIN").toUpperCase()}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-wider">
                      Invited
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                     <span className="text-[10px] font-black text-slate-300 uppercase">Awaiting Join</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
