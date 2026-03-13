"use client";

import { useState } from "react";
import { 
  ImageIcon, 
  Video, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Trash2, 
  Edit, 
  ExternalLink,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { photos, videos, Photo, Video as VideoType } from "@/data/gallery";

export default function GalleryAdminPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = photos.filter(photo => 
    photo.alt.toLowerCase().includes(searchQuery.toLowerCase()) || 
    photo.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Media Assets</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2 flex items-center gap-2">
            <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
            Asset Management Gateway // {activeTab === "photos" ? photos.length : videos.length} Total Units
          </p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
              <Filter className="size-3.5 text-slate-400" />
              Filter
           </button>
           <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all flex items-center gap-2 active:scale-95">
              <Plus className="size-3.5" />
              Upload {activeTab === "photos" ? "Photo" : "Video"}
           </button>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
          <button 
            onClick={() => setActiveTab("photos")}
            className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === "photos" 
                ? "bg-white text-primary shadow-lg shadow-slate-200/50 scale-100" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Photos
          </button>
          <button 
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === "videos" 
                ? "bg-white text-primary shadow-lg shadow-slate-200/50 scale-100" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Videos
          </button>
        </div>

        <div className="relative group w-full lg:w-96">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 size-4 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-[24px] text-sm font-medium focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Grid */}
      {activeTab === "photos" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => setSelectedPhoto(photo)}
                    className="size-10 bg-white/20 backdrop-blur-md text-white rounded-xl flex items-center justify-center hover:bg-white/40 transition-all"
                  >
                    <Maximize2 className="size-5" />
                  </button>
                  <button className="size-10 bg-white/20 backdrop-blur-md text-white rounded-xl flex items-center justify-center hover:bg-white/40 transition-all">
                    <Edit className="size-5" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-black text-slate-900 uppercase tracking-widest border border-white/20">
                    {photo.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold text-slate-600 line-clamp-2">{photo.alt}</p>
                  <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Video className="size-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-slate-900/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-widest border border-white/10">
                    {video.duration}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight leading-none">{video.title}</h3>
                  <button className="text-slate-400 hover:text-slate-900 transition-colors">
                    <MoreVertical className="size-5" />
                  </button>
                </div>
                <p className="text-xs font-medium text-slate-500 line-clamp-2 leading-relaxed mb-6">{video.description}</p>
                <div className="flex items-center gap-4">
                  <button className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-100 transition-all">
                    Edit Details
                  </button>
                  <button className="px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 rounded-xl transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {((activeTab === "photos" && filteredPhotos.length === 0) || 
        (activeTab === "videos" && filteredVideos.length === 0)) && (
        <div className="py-24 text-center">
          <div className="size-20 bg-slate-100 rounded-[32px] flex items-center justify-center mx-auto mb-6">
            <Search className="size-8 text-slate-300" />
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">No assets found</h3>
          <p className="text-slate-500 font-medium text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Lightbox / Preview Placeholder */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-xl z-[100] flex items-center justify-center p-8 lg:p-24"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain rounded-3xl"
              />
              <div className="mt-8 text-center">
                <p className="text-white font-black text-lg">{selectedPhoto.alt}</p>
                <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em] mt-2">{selectedPhoto.category}</p>
              </div>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                Close Gateway
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
