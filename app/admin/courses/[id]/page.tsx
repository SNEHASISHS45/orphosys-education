"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Save, ChevronLeft, Loader2, X, Plus, Sparkles, Layout, Clock, BarChart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FileUpload from "@/components/admin/FileUpload";

export default function CourseEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const isNew = id === "new";
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  
  const [course, setCourse] = useState({
    title: "",
    slug: "",
    description: "",
    shortDesc: "",
    icon: "",
    image: "",
    category: "",
    duration: "",
    level: "",
    price: "",
    features: [] as string[],
    isActive: true,
    isPopular: false,
    order: 0,
  });

  const [newFeature, setNewFeature] = useState("");

  useEffect(() => {
    if (!isNew) {
      fetch(`/api/courses/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse({ ...data, features: data.features || [] });
          setLoading(false);
        });
    }
  }, [isNew, id]);

  const addFeature = () => {
    if (newFeature.trim()) {
      setCourse({ ...course, features: [...course.features, newFeature.trim()] });
      setNewFeature("");
    }
  };

  const removeFeature = (idx: number) => {
    setCourse({ ...course, features: course.features.filter((_, i) => i !== idx) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const url = isNew ? "/api/courses" : `/api/courses/${id}`;
    const method = isNew ? "POST" : "PUT";

    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(course),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        router.push("/admin/courses");
      }
    } catch (error) {
      alert("Failed to save course");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Retrieving Specifications...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in pb-20">
      {/* Header Area - Minimalist */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <Link href="/admin/courses" className="size-11 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-primary hover:shadow-md transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">
              {isNew ? "New Course Onboarding" : "Edit Specification"}
            </h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-3 flex items-center gap-2">
               <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
               {isNew ? "Registry Initialization" : `Editing: ${course.title}`}
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="px-10 py-4.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-primary shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Commit Changes
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
         {/* Main Configuration Deck */}
         <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 lg:p-10 space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Universal Title</label>
                      <input
                        type="text" required value={course.title}
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-sm font-bold outline-none"
                        placeholder="e.g. Vedic Math Mastery"
                      />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Slug Fingerprint</label>
                      <div className="relative">
                        <Layout className="absolute left-4 top-1/2 -translate-y-1/2 size-3.5 text-slate-300" />
                        <input
                          type="text" required value={course.slug}
                          onChange={(e) => setCourse({ ...course, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                          className="w-full pl-11 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-xs font-mono outline-none"
                          placeholder="e.g. vedic-math"
                        />
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Card Descriptor</label>
                   <input
                     type="text" value={course.shortDesc}
                     onChange={(e) => setCourse({ ...course, shortDesc: e.target.value })}
                     className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-xs font-bold text-slate-600 outline-none"
                     placeholder="Brief overview for cards"
                   />
                </div>

                <div className="space-y-3">
                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Strategic Narrative</label>
                   <textarea
                     value={course.description}
                     onChange={(e) => setCourse({ ...course, description: e.target.value })}
                     rows={6}
                     className="w-full px-5 py-5 bg-slate-50 border border-slate-100 rounded-[32px] focus:bg-white focus:border-primary/40 transition-all text-xs font-bold text-slate-600 outline-none resize-none italic leading-relaxed shadow-inner"
                     placeholder="Detailed course content..."
                   ></textarea>
                </div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 lg:p-10 space-y-8">
               <div className="flex justify-between items-center">
                 <h3 className="text-sm font-black text-slate-900 tracking-tight uppercase flex items-center gap-2">
                   <Sparkles className="size-4 text-primary" /> Key Value Propositions
                 </h3>
                 <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{course.features.length} Registered Points</span>
               </div>
               
               <div className="flex gap-3">
                  <input
                    type="text" value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    className="flex-grow px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-xs font-bold outline-none"
                    placeholder="Add Characteristic..."
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                  />
                  <button type="button" onClick={addFeature} className="size-14 bg-slate-900 text-white rounded-2xl hover:bg-primary transition-all flex items-center justify-center shadow-lg active:scale-95">
                     <Plus className="w-5 h-5" />
                  </button>
               </div>

               <div className="flex flex-wrap gap-3">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-[10px] font-black text-slate-700 uppercase tracking-wider group hover:bg-white hover:shadow-sm transition-all">
                       {feature}
                       <button type="button" onClick={() => removeFeature(i)} className="text-slate-300 hover:text-red-500 transition-colors">
                          <X className="w-3.5 h-3.5" />
                       </button>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Side Control Panel */}
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 space-y-8">
               <FileUpload 
                  onUpload={(url) => setCourse({ ...course, image: url })}
                  defaultValue={course.image}
                  label="Visual Asset"
                  helperText="Primary Marketing Thumbnail"
               />

               <div className="space-y-3">
                     <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Library Icon</label>
                     <input
                       type="text" value={course.icon}
                       onChange={(e) => setCourse({ ...course, icon: e.target.value })}
                       className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-xs font-mono outline-none shadow-sm"
                       placeholder="e.g. calculate"
                     />
                  </div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 space-y-6">
               <h3 className="text-xs font-black text-slate-900 tracking-widest uppercase mb-4">Meta Indicators</h3>
               <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                       <Layout className="size-3 text-primary" /> Category
                    </label>
                    <input
                      type="text" value={course.category}
                      onChange={(e) => setCourse({ ...course, category: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-[11px] font-bold outline-none shadow-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                           <Clock className="size-3 text-primary" /> Duration
                        </label>
                        <input
                          type="text" value={course.duration}
                          onChange={(e) => setCourse({ ...course, duration: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-[11px] font-bold outline-none"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                           <BarChart className="size-3 text-primary" /> Tier
                        </label>
                        <input
                          type="text" value={course.level}
                          onChange={(e) => setCourse({ ...course, level: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-[11px] font-bold outline-none"
                        />
                     </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                       <Target className="size-3 text-primary" /> Valuation
                    </label>
                    <input
                      type="text" value={course.price}
                      onChange={(e) => setCourse({ ...course, price: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-[11px] font-bold outline-none"
                      placeholder="e.g. ₹1000"
                    />
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 rounded-[40px] p-8 space-y-6 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                   <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Priority Status</span>
                      <p className="text-[11px] font-bold text-slate-400">Featured Placement</p>
                   </div>
                   <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={course.isPopular} 
                        onChange={(e) => setCourse({...course, isPopular: e.target.checked})}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                   </label>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                   <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Access Control</span>
                      <p className="text-[11px] font-bold text-slate-400">Public Availability</p>
                   </div>
                   <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={course.isActive} 
                        onChange={(e) => setCourse({...course, isActive: e.target.checked})}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                   </label>
                </div>
            </div>
         </div>
      </form>
    </div>
  );
}
