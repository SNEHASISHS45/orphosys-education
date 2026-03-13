"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Loader2, Handshake, X, Globe } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FileUpload from "@/components/admin/FileUpload";

export default function PartnerManagement() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPartner, setEditingPartner] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const res = await fetch("/api/partners");
      const data = await res.json();
      setPartners(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (partner: any) => {
    setEditingPartner(partner || { name: "", logoUrl: "", website: "", order: 0 });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this partner?")) return;
    await fetch(`/api/partners/${id}`, { method: "DELETE" });
    fetchPartners();
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingPartner.id ? "PUT" : "POST";
    const url = editingPartner.id ? `/api/partners/${editingPartner.id}` : "/api/partners";

    await fetch(url, {
      method,
      body: JSON.stringify(editingPartner),
      headers: { "Content-Type": "application/json" },
    });

    setIsModalOpen(false);
    fetchPartners();
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <Loader2 className="size-10 animate-spin text-primary" />
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Loading Partnerships...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in relative z-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Partners & Affiliations</h1>
          <p className="text-slate-500 font-medium italic">Manage collaboration logos and website links.</p>
        </div>
        <button 
          onClick={() => handleEdit(null)}
          className="bg-slate-900 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-primary transition-all active:scale-95 flex items-center gap-3 uppercase text-[10px] tracking-widest"
        >
          <Plus className="w-5 h-5" />
          Add Partner
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner: any) => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center"
          >
            <div className="size-20 bg-slate-50 rounded-2xl overflow-hidden relative mb-4 flex-shrink-0 ring-4 ring-slate-50 group-hover:ring-primary/5 transition-all">
               {partner.logoUrl ? (
                 <Image src={partner.logoUrl} alt="" fill className="object-contain p-2 transition-transform duration-500 group-hover:scale-110" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <Handshake className="w-8 h-8" />
                 </div>
               )}
            </div>
            <h3 className="font-black text-slate-800 text-[10px] uppercase tracking-tight text-center line-clamp-1 mb-4">{partner.name}</h3>
            
            <div className="flex justify-center gap-1 w-full pt-4 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => handleEdit(partner)} className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <Edit2 className="w-4 h-4" />
               </button>
               <button onClick={() => handleDelete(partner.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern High-Fidelity Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4 lg:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md pointer-events-auto" 
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100 pointer-events-auto"
            >
               <div className="p-10 space-y-10">
                 <div className="flex justify-between items-center">
                    <div>
                       <h2 className="text-2xl font-black text-slate-900 tracking-tighter">
                          {editingPartner.id ? "Edit Partner" : "New Affiliate"}
                       </h2>
                       <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                          <span className="size-1.5 bg-primary rounded-full animate-pulse"></span> Partner Registry
                       </p>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(false)} 
                      className="size-12 bg-slate-50 flex items-center justify-center rounded-2xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all active:scale-95"
                    >
                      <X className="w-5 h-5" />
                    </button>
                 </div>

                 <form onSubmit={handleSave} className="space-y-8">
                    <FileUpload 
                      onUpload={(url) => setEditingPartner({ ...editingPartner, logoUrl: url })}
                      defaultValue={editingPartner.logoUrl}
                      label="Partner Brand Mark"
                      helperText="SVG or Vector Preferred"
                    />

                    <div className="space-y-5">
                       <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Entity Name</label>
                          <input 
                            type="text" required value={editingPartner.name} 
                            onChange={(e) => setEditingPartner({...editingPartner, name: e.target.value})}
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-sm font-bold outline-none shadow-sm"
                            placeholder="e.g. Google Cloud"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Digital Presence</label>
                          <div className="relative group">
                             <Globe className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-300 group-focus-within:text-primary transition-all" />
                             <input 
                               type="text" value={editingPartner.website} 
                               onChange={(e) => setEditingPartner({...editingPartner, website: e.target.value})}
                               className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary/40 transition-all text-xs font-bold outline-none shadow-sm"
                               placeholder="https://google.com"
                             />
                          </div>
                       </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-primary hover:shadow-primary/30 active:scale-95 transition-all uppercase tracking-[0.3em] text-[10px]"
                    >
                       {editingPartner.id ? "Synchronize Partner" : "Authorize Affiliate"}
                    </button>
                 </form>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
