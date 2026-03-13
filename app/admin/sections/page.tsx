"use client";

import { useState, useEffect } from "react";
import { 
  Save, 
  Loader2, 
  Layout, 
  Type, 
  Image as ImageIcon, 
  CheckCircle2,
  Monitor,
  Edit3,
  Globe,
  Layers,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "@/components/admin/Tooltip";

const SECTIONS = [
  { 
    page: "home", 
    section: "hero", 
    title: "Homepage Hero",
    icon: Globe,
    fields: [
      { name: "title", label: "Main Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "primaryBtnText", label: "Primary Button Text", type: "text" },
      { name: "primaryBtnUrl", label: "Primary Button Link", type: "text" },
      { name: "image", label: "Hero Image URL", type: "text" },
    ]
  },
  {
    page: "home",
    section: "about",
    title: "Homepage About Section",
    icon: Layers,
    fields: [
      { name: "badge", label: "Top Badge", type: "text" },
      { name: "title", label: "Section Title", type: "text" },
      { name: "description", label: "Main Description", type: "textarea" },
      { name: "image1", label: "Main Image URL", type: "text" },
      { name: "image2", label: "Secondary Image URL", type: "text" },
      { name: "statsLabel", label: "Stats Label", type: "text" },
      { name: "statsValue", label: "Stats Value", type: "text" },
    ]
  },
];

export default function PageSectionEditor() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0]);
  const [content, setContent] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  const fetchContent = async (page: string, section: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/sections?page=${page}&section=${section}`);
      const data = await res.json();
      setContent(data.content || {});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent(selectedSection.page, selectedSection.section);
  }, [selectedSection]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus("");
    try {
      await fetch("/api/sections", {
        method: "POST",
        body: JSON.stringify({
          page: selectedSection.page,
          section: selectedSection.section,
          content: content,
        }),
        headers: { "Content-Type": "application/json" },
      });
      setStatus("success");
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      alert("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-10 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Content Matrix</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2 flex items-center gap-2">
            <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
            Interface: Page Section Synchronizer
          </p>
        </div>
        
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="flex items-center gap-2 text-emerald-600 font-black text-xs bg-emerald-50 px-5 py-2.5 rounded-xl border border-emerald-100 shadow-sm"
          >
             <CheckCircle2 className="w-4 h-4" />
             NODE UPDATED SUCCESSFULLY
          </motion.div>
        )}
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
         {/* Sidebar Navigation */}
         <div className="space-y-4">
             <div className="flex items-center gap-2 mb-6 pointer-events-none">
                <Monitor className="size-4 text-slate-400" />
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Module Select</h3>
             </div>
             {SECTIONS.map((sec) => (
               <button
                 key={`${sec.page}-${sec.section}`}
                 onClick={() => setSelectedSection(sec)}
                 className={`w-full group relative flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 font-bold text-sm ${
                   selectedSection.section === sec.section 
                     ? "bg-white text-primary shadow-xl shadow-slate-200/50 border border-slate-100" 
                     : "bg-transparent text-slate-500 hover:text-slate-900 border border-transparent hover:bg-white/50"
                 }`}
               >
                 {selectedSection.section === sec.section && (
                   <motion.div 
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/5 rounded-2xl pointer-events-none"
                   />
                 )}
                 <sec.icon className={`w-4 h-4 transition-colors ${selectedSection.section === sec.section ? "text-primary" : "text-slate-300 group-hover:text-slate-500"}`} />
                 <span className="relative z-10">{sec.title}</span>
               </button>
             ))}
         </div>

         {/* Editor Area */}
         <div className="lg:col-span-3">
            <div className="bg-white rounded-[48px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
               <div className="px-10 py-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
                  <div className="flex items-center gap-5">
                     <div className="size-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-sm shadow-primary/5">
                        <Edit3 className="w-7 h-7" />
                     </div>
                     <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{selectedSection.title}</h2>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{selectedSection.page}</span>
                           <span className="text-slate-200">/</span>
                           <span className="text-[9px] text-primary font-black uppercase tracking-widest">{selectedSection.section}</span>
                        </div>
                     </div>
                  </div>
               </div>

               <AnimatePresence mode="wait">
                 {loading ? (
                   <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-32 flex flex-col items-center justify-center gap-4"
                   >
                     <Loader2 className="animate-spin text-primary size-10" />
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Querying Database...</p>
                   </motion.div>
                 ) : (
                   <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSave} 
                    className="p-10 lg:p-14 space-y-12"
                   >
                     <div className="grid gap-12">
                        {selectedSection.fields.map((field, idx) => (
                          <div key={field.name + idx} className="space-y-4">
                             <div className="flex items-center gap-3 ml-2">
                               <div className="size-1.5 bg-primary/40 rounded-full"></div>
                               <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{field.label}</label>
                             </div>
                             {field.type === "textarea" ? (
                               <textarea
                                 value={content[field.name] || ""}
                                 onChange={(e) => setContent({ ...content, [field.name]: e.target.value })}
                                 rows={5}
                                 className="w-full px-8 py-6 bg-slate-50/50 border-2 border-slate-50 rounded-[32px] focus:bg-white focus:border-primary/20 transition-all text-slate-700 font-medium outline-none resize-none placeholder:text-slate-300"
                                 placeholder={`Enter ${field.label.toLowerCase()} content...`}
                               />
                             ) : (
                               <div className="relative group">
                                  <input
                                    type="text"
                                    value={content[field.name] || ""}
                                    onChange={(e) => setContent({ ...content, [field.name]: e.target.value })}
                                    className="w-full px-8 py-6 bg-slate-50/50 border-2 border-slate-50 rounded-[24px] focus:bg-white focus:border-primary/20 transition-all text-slate-900 font-bold outline-none placeholder:text-slate-300"
                                    placeholder={`Enter ${field.label.toLowerCase()}...`}
                                  />
                                  {field.name.toLowerCase().includes("image") && (
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                       <div className="h-4 w-px bg-slate-100"></div>
                                       <ImageIcon className="w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                    </div>
                                  )}
                               </div>
                             )}
                          </div>
                        ))}
                     </div>

                     <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex gap-4">
                           <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                              <Globe className="size-3 text-emerald-600" />
                              <span className="text-[9px] font-black text-slate-500 uppercase">Live Preview Active</span>
                           </div>
                           <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                              <Sparkles className="size-3 text-primary" />
                              <span className="text-[9px] font-black text-slate-500 uppercase">Premium Engine</span>
                           </div>
                        </div>

                        <Tooltip content="Synchronize Node with Production" position="top">
                          <button
                            type="submit"
                            disabled={saving}
                            className="w-full sm:w-auto bg-slate-900 text-white font-black px-12 py-6 rounded-[30px] shadow-xl hover:shadow-2xl hover:shadow-slate-300 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-4 disabled:opacity-50 group font-bold uppercase tracking-[0.1em]"
                          >
                            {saving ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6 group-hover:scale-110 transition-transform" />}
                            Push Update to Live
                          </button>
                        </Tooltip>
                     </div>
                   </motion.form>
                 )}
               </AnimatePresence>
            </div>
         </div>
      </div>
    </div>
  );
}
