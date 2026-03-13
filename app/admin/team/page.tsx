"use client";

import { useState, useEffect } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Loader2, 
  Users, 
  Globe, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Helper for social icon auto-detection
const getSocialIcon = (url: string) => {
  if (!url) return <Globe className="size-4" />;
  const normalized = url.toLowerCase();
  if (normalized.includes("facebook.com") || normalized.includes("fb.com")) return <Facebook className="size-4 text-[#1877F2]" />;
  if (normalized.includes("instagram.com")) return <Instagram className="size-4 text-[#E4405F]" />;
  if (normalized.includes("linkedin.com")) return <Linkedin className="size-4 text-[#0A66C2]" />;
  if (normalized.includes("twitter.com") || normalized.includes("x.com")) return <Twitter className="size-4 text-[#000000]" />;
  return <Globe className="size-4 text-slate-400" />;
};

export default function TeamManagement() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this team member?")) return;
    try {
      await fetch(`/api/team/${id}`, { method: "DELETE" });
      setMembers(members.filter((m: any) => m.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <Loader2 className="size-10 animate-spin text-primary" />
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Synchronizing Roster...</p>
    </div>
  );

  return (
    <div className="space-y-12 animate-fade-in relative z-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Faculty Roster</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2 flex items-center gap-2">
            <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
            Profile Management Gateway // {members.length} Active Records
          </p>
        </div>
        <Link 
          href="/admin/team/new"
          className="px-8 py-4 bg-primary text-white text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
        >
          <Plus className="size-4" />
          Onboard Member
        </Link>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {members.map((member: any, i) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="relative group/avatar">
                <div className="size-24 rounded-[32px] bg-slate-50 overflow-hidden border-2 border-white ring-8 ring-slate-50 transition-all duration-500 group-hover:ring-primary/5">
                  {member.imageUrl ? (
                    <Image src={member.imageUrl} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                      <Users className="size-8 text-slate-400" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 size-8 bg-white rounded-xl shadow-lg border border-slate-50 flex items-center justify-center">
                  <div className="size-2 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link href={`/admin/team/${member.id}`} className="size-10 bg-slate-50 hover:bg-primary hover:text-white text-slate-400 rounded-xl transition-all flex items-center justify-center shadow-sm">
                  <Edit2 className="size-4" />
                </Link>
                <button onClick={() => handleDelete(member.id)} className="size-10 bg-slate-50 hover:bg-red-500 hover:text-white text-slate-400 rounded-xl transition-all flex items-center justify-center shadow-sm">
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">{member.role}</p>
              {member.bio && (
                <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-2 mb-6 italic">
                  "{member.bio}"
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 pt-6 border-t border-slate-50">
               {[member.facebookUrl, member.instagramUrl, member.linkedinUrl].filter(Boolean).map((url, idx) => (
                 <a 
                   key={idx} 
                   href={url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="size-9 bg-slate-50 hover:bg-white hover:shadow-md border border-slate-100 rounded-xl flex items-center justify-center transition-all group/social"
                 >
                   {getSocialIcon(url)}
                 </a>
               ))}
               {!member.facebookUrl && !member.instagramUrl && !member.linkedinUrl && (
                 <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">No social profiles attached</span>
               )}
            </div>
          </motion.div>
        ))}

        {members.length === 0 && (
          <div className="col-span-full py-24 border-2 border-dashed border-slate-200 rounded-[40px] flex flex-col items-center justify-center space-y-4">
             <div className="size-16 bg-slate-50 rounded-full flex items-center justify-center">
                <Users className="size-8 text-slate-300" />
             </div>
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center">No team members registered.<br/>Start by onboarding your faculty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
