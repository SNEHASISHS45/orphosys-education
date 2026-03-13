"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon, Loader2 } from "lucide-react";
import FileUpload from "@/components/admin/FileUpload";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<any>({
    title: "",
    shortDesc: "",
    desc: "",
    icon: "psychology_alt",
    color: "bg-primary/10 text-primary",
    features: [],
    image: "",
    order: 0
  });

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/programs");
      const data = await res.json();
      setPrograms(data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (program: any) => {
    setEditingProgram(program || {
      title: "",
      shortDesc: "",
      desc: "",
      icon: "psychology_alt",
      color: "bg-primary/10 text-primary",
      features: [],
      image: "",
      order: programs.length
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;
    try {
      await fetch(`/api/programs/${id}`, { method: "DELETE" });
      fetchPrograms();
    } catch (error) {
      console.error("Error deleting program:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingProgram.id ? "PUT" : "POST";
    const url = editingProgram.id ? `/api/programs/${editingProgram.id}` : "/api/programs";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProgram),
      });
      if (res.ok) {
        setIsModalOpen(false);
        fetchPrograms();
      }
    } catch (error) {
      console.error("Error saving program:", error);
    }
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...editingProgram.features];
    newFeatures[index] = value;
    setEditingProgram({ ...editingProgram, features: newFeatures });
  };

  const addFeature = () => {
    setEditingProgram({ ...editingProgram, features: [...editingProgram.features, ""] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = editingProgram.features.filter((_: any, i: number) => i !== index);
    setEditingProgram({ ...editingProgram, features: newFeatures });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Core Programs</h1>
          <p className="text-slate-500 font-medium">Manage your educational offerings and services.</p>
        </div>
        <button 
          onClick={() => handleEdit(null)}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          <Plus className="w-5 h-5" />
          Add Program
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-primary w-10 h-10" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${program.color || "bg-primary/10 text-primary"}`}>
                  <span className="material-symbols-outlined text-3xl">{program.icon}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(program)} className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-primary transition-all">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(program.id)} className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-red-500 transition-all">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">{program.title}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2 font-medium">{program.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
                <span className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {program.features.length} Features
                </span>
                {program.image && (
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> Image
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Minimalist Premium Modal - Scaled for efficiency */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4 lg:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm pointer-events-auto" 
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden border border-slate-100 pointer-events-auto max-h-[92vh] flex flex-col"
            >
              <div className="flex-grow overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Form Main Area */}
                  <div className="lg:col-span-12 p-6 lg:p-10 relative">
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-6 right-6 size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 transition-all active:scale-95 z-50"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="mb-8">
                       <h2 className="text-2xl font-black text-slate-900 tracking-tighter">
                         {editingProgram.id ? "Edit Program" : "Create Program"}
                       </h2>
                       <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                          <span className="size-1.5 bg-primary rounded-full animate-pulse"></span> Service Definition
                       </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7 space-y-5">
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Program Title</label>
                            <input 
                              type="text" required value={editingProgram.title} 
                              onChange={(e) => setEditingProgram({...editingProgram, title: e.target.value})}
                              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-xs font-bold outline-none shadow-sm"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Icon Ref</label>
                              <input 
                                type="text" required value={editingProgram.icon} 
                                onChange={(e) => setEditingProgram({...editingProgram, icon: e.target.value})}
                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-xs font-mono outline-none shadow-sm"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Color Palette</label>
                              <input 
                                type="text" value={editingProgram.color} 
                                onChange={(e) => setEditingProgram({...editingProgram, color: e.target.value})}
                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-xs font-mono outline-none shadow-sm"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Comprehensive Narrative</label>
                            <textarea 
                              rows={4} required value={editingProgram.desc} 
                              onChange={(e) => setEditingProgram({...editingProgram, desc: e.target.value})}
                              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-xs font-bold outline-none italic resize-none leading-relaxed shadow-sm"
                            ></textarea>
                          </div>
                        </div>

                        <div className="lg:col-span-5 space-y-6">
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Visual Asset</label>
                            <div className="p-1 border border-slate-100 rounded-2xl bg-slate-50/50 scale-95 origin-top">
                              <FileUpload 
                                defaultValue={editingProgram.image}
                                onUpload={(url) => setEditingProgram({...editingProgram, image: url})}
                              />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center px-1">
                              <label className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Key Features</label>
                              <button type="button" onClick={addFeature} className="text-[8px] font-black text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 rounded-lg">+ Add</button>
                            </div>
                            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 scrollbar-hide">
                              {editingProgram.features.map((feature: string, idx: number) => (
                                <div key={idx} className="flex gap-2 group/feature">
                                  <input 
                                    type="text" value={feature} 
                                    onChange={(e) => updateFeature(idx, e.target.value)}
                                    className="flex-1 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary/40 transition-all text-[10px] outline-none font-bold italic"
                                  />
                                  <button type="button" onClick={() => removeFeature(idx)} className="size-8 flex items-center justify-center bg-slate-50 text-slate-300 hover:text-red-500 rounded-lg transition-all">
                                     <X className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end gap-3 border-t border-slate-50">
                        <button 
                          type="button" onClick={() => setIsModalOpen(false)}
                          className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all"
                        >
                          Cancel
                        </button>
                        <button 
                          type="submit"
                          className="px-10 py-3.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-primary shadow-lg hover:shadow-primary/30 active:scale-95 transition-all"
                        >
                          Commit Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
