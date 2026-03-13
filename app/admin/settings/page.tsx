"use client";

import { useState, useEffect } from "react";
import { Save, Loader2, Globe, Mail, Phone, MapPin, Clock, Camera } from "lucide-react";

import FileUpload from "@/components/admin/FileUpload";

export default function GlobalSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    logoUrl: "",
    footerLogoUrl: "",
    email: "",
    phone: "",
    address: "",
    officeHours: "",
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
  });

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        setSettings((prev) => ({ ...prev, ...data }));
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/settings", {
        method: "POST",
        body: JSON.stringify(settings),
        headers: { "Content-Type": "application/json" },
      });
      alert("Settings updated successfully!");
    } catch (error) {
      alert("Failed to update settings.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Global Settings</h1>
        <p className="text-slate-500 font-medium mt-1">Manage your website's branding, contact info, and social links.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Branding Section */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
           <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/50 flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight text-sm">Site Branding</h2>
           </div>
           <div className="p-8 grid md:grid-cols-2 gap-8">
              <FileUpload 
                label="Header Logo"
                defaultValue={settings.logoUrl}
                onUpload={(url) => setSettings({ ...settings, logoUrl: url })}
              />
              <FileUpload 
                label="Footer Logo"
                defaultValue={settings.footerLogoUrl}
                onUpload={(url) => setSettings({ ...settings, footerLogoUrl: url })}
              />
           </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
           <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/50 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight text-sm">Contact Information</h2>
           </div>
           <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Email Address</label>
                    <div className="relative">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                       <input
                         type="email"
                         value={settings.email}
                         onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                         className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-medium outline-none"
                         placeholder="contact@orphosys.org"
                       />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Phone Number</label>
                    <div className="relative">
                       <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                       <input
                         type="text"
                         value={settings.phone}
                         onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                         className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-medium outline-none"
                         placeholder="+91 1234567890"
                       />
                    </div>
                 </div>
              </div>
              <div>
                 <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Office Address</label>
                 <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      value={settings.address}
                      onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-medium outline-none resize-none"
                      placeholder="Enter full address..."
                    ></textarea>
                 </div>
              </div>
           </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
           <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/50 flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight text-sm">Social Links</h2>
           </div>
           <div className="p-8 grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Facebook</label>
                <input
                  type="text"
                  value={settings.facebookUrl}
                  onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-primary transition-all text-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Instagram</label>
                <input
                  type="text"
                  value={settings.instagramUrl}
                  onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-primary transition-all text-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Twitter</label>
                <input
                  type="text"
                  value={settings.twitterUrl}
                  onChange={(e) => setSettings({ ...settings, twitterUrl: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:border-primary transition-all text-slate-900 outline-none"
                />
              </div>
           </div>
        </div>

        <div className="flex justify-end pt-4">
           <button
             type="submit"
             disabled={saving}
             className="bg-primary text-white font-black px-8 py-4 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-3 disabled:opacity-50"
           >
             {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
             Save All Changes
           </button>
        </div>
      </form>
    </div>
  );
}
