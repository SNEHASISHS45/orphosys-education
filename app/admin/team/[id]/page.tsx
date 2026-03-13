"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { 
  Save, 
  ChevronLeft, 
  Loader2, 
  Users, 
  Globe, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import FileUpload from "@/components/admin/FileUpload";

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

export default function TeamMemberEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const isNew = id === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [member, setMember] = useState({
    name: "",
    role: "",
    imageUrl: "",
    bio: "",
    order: 0,
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: ""
  });

  useEffect(() => {
    if (!isNew) {
      fetch(`/api/team/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMember(data);
          setLoading(false);
        });
    }
  }, [isNew, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const url = isNew ? "/api/team" : `/api/team/${id}`;
    const method = isNew ? "POST" : "PUT";

    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(member),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        router.push("/admin/team");
      }
    } catch (error) {
      alert("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Retrieving Profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in pb-20">
      {/* Header Area - Minimalist */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <Link href="/admin/team" className="size-11 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-primary hover:shadow-md transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">
              {isNew ? "Create New Profile" : "Edit Profile"}
            </h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-3 flex items-center gap-2">
               <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
               {isNew ? "Faculty Onboarding" : `Managing: ${member.name}`}
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="px-10 py-4.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-primary shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isNew ? "Finalize Onboarding" : "Synchronize Updates"}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
         {/* Main Identity Deck */}
         <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 lg:p-12 space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                      <div className="relative group">
                        <Users className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text" required value={member.name}
                          onChange={(e) => setMember({ ...member, name: e.target.value })}
                          className="w-full pl-12 pr-6 py-4.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-sm font-bold outline-none shadow-sm"
                          placeholder="e.g. Prof. Arnab Ghosh"
                        />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Designation</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-slate-300 group-focus-within:text-primary transition-colors flex items-center justify-center font-black">?</div>
                        <input
                          type="text" required value={member.role}
                          onChange={(e) => setMember({ ...member, role: e.target.value })}
                          className="w-full pl-12 pr-6 py-4.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-sm font-bold outline-none shadow-sm"
                          placeholder="e.g. Research Lead"
                        />
                      </div>
                   </div>
                </div>

                <div className="space-y-5">
                   <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <Globe className="size-3.5 text-primary" /> Connected Architecture
                   </label>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { key: "facebookUrl", placeholder: "fb.com/..." },
                        { key: "instagramUrl", placeholder: "instagr.am/..." },
                        { key: "linkedinUrl", placeholder: "linkedin.com/..." }
                      ].map((field) => (
                        <div key={field.key} className="relative group/social">
                          <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10 transition-transform group-hover/social:scale-110">
                            {getSocialIcon((member as any)[field.key])}
                          </div>
                          <input
                            type="text"
                            value={(member as any)[field.key] || ""}
                            onChange={(e) => setMember({ ...member, [field.key]: e.target.value })}
                            placeholder={field.placeholder}
                            className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-[11px] outline-none font-bold text-slate-500 shadow-sm"
                          />
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Professional Abstract</label>
                   <textarea
                     value={member.bio}
                     onChange={(e) => setMember({ ...member, bio: e.target.value })}
                     rows={6}
                     className="w-full px-6 py-6 bg-slate-50 border border-slate-100 rounded-[32px] focus:bg-white focus:border-primary/40 transition-all text-sm font-bold text-slate-600 outline-none resize-none italic leading-relaxed shadow-inner"
                     placeholder="Brief professional background..."
                   ></textarea>
                </div>
            </div>
         </div>

         {/* Side Control Panel */}
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 space-y-8">
               <FileUpload 
                  onUpload={(url) => setMember({ ...member, imageUrl: url })}
                  defaultValue={member.imageUrl}
                  label="Visual Identity"
                  helperText="Portrait Asset // Square Recommended"
               />

               <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 space-y-4">
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Upload Guidelines</h4>
                  <ul className="space-y-3">
                     <li className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <CheckCircle2 className="size-3.5 text-emerald-500" /> Square Aspect Ratio
                     </li>
                     <li className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <CheckCircle2 className="size-3.5 text-emerald-500" /> Transparent PNG preferred
                     </li>
                  </ul>
               </div>

               <div className="space-y-3 pt-4 border-t border-slate-50">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Display Order Priority</label>
                  <input
                    type="number" value={member.order}
                    onChange={(e) => setMember({ ...member, order: parseInt(e.target.value) })}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-sm font-black outline-none shadow-sm"
                  />
               </div>
            </div>

            <div className="bg-slate-900 rounded-[40px] p-8 space-y-6 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                   <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Onboarding Status</span>
                      <p className="text-[11px] font-bold text-slate-400">Registry Integrity Check</p>
                   </div>
                   <div className="size-10 bg-slate-800 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="size-5 text-emerald-400" />
                   </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                   <Link 
                     href="/admin/team"
                     className="w-full py-4.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-95"
                   >
                     Abandon Changes
                   </Link>
                </div>
            </div>
         </div>
      </form>
    </div>
  );
}
