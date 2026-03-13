"use client";

import { useState, useRef, DragEvent } from "react";
import { Upload, X, Loader2, CheckCircle2, AlertCircle, Camera, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FileUploadProps {
  onUpload: (url: string) => void;
  defaultValue?: string;
  label?: string;
  accept?: string;
  helperText?: string;
  className?: string;
}

export default function FileUpload({ 
  onUpload, 
  defaultValue, 
  label, 
  accept = "image/*",
  helperText = "Portrait / Horizontal Asset",
  className = ""
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(defaultValue || "");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    if (!file) return;

    // Type validation
    if (accept === "image/*" && !file.type.startsWith("image/")) {
      setError("Invalid file type. Please upload an image.");
      return;
    }

    // Size validation - 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too large. Max size is 5MB.");
      return;
    }

    // Local preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onUpload(data.url);
      setPreview(data.url);
    } catch (err: any) {
      setError(err.message);
      setPreview(defaultValue || "");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview("");
    onUpload("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {label && (
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block">
          {label}
        </label>
      )}
      
      <div 
        onClick={() => !uploading && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative group cursor-pointer aspect-square sm:aspect-video lg:aspect-[4/3] rounded-[40px] transition-all overflow-hidden border-2 border-dashed
          ${isDragging ? 'border-primary bg-primary/5 scale-[1.02] shadow-2xl shadow-primary/10' : 'border-slate-100 bg-slate-50 hover:border-primary/30'}
          ${preview ? 'border-solid border-slate-100 bg-white shadow-sm' : ''}
          ${error ? 'border-red-200 bg-red-50' : ''}
          ${uploading ? 'pointer-events-none' : ''}
        `}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          className="hidden" 
        />

        <AnimatePresence mode="wait">
          {uploading ? (
            <motion.div 
              key="uploading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-20"
            >
              <div className="flex flex-col items-center gap-4">
                 <Loader2 className="w-8 h-8 animate-spin text-primary" />
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] animate-pulse">Uploading Stream...</span>
              </div>
            </motion.div>
          ) : preview ? (
            <motion.div 
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 w-full h-full group/preview"
            >
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover/preview:bg-slate-900/40 transition-all flex items-center justify-center">
                 <div className="opacity-0 group-hover/preview:opacity-100 transition-all translate-y-4 group-hover/preview:translate-y-0 flex gap-3">
                    <button 
                      type="button"
                      className="size-12 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <Upload className="w-5 h-5" />
                    </button>
                    <button 
                      type="button"
                      onClick={handleClear}
                      className="size-12 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1 text-red-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full flex flex-col items-center justify-center text-slate-300 gap-4 p-8 text-center"
            >
              <div className="size-20 bg-white rounded-[32px] flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all">
                {isDragging ? (
                  <ImageIcon className="w-10 h-10 text-primary animate-bounce" />
                ) : (
                  <Camera className="w-10 h-10 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
                )}
              </div>
              <div className="space-y-1">
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 block group-hover:text-primary transition-colors">
                   {isDragging ? "Release Asset Now" : "Drop or Click to Upload"}
                 </span>
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{helperText}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Indicators */}
        <div className="absolute top-4 right-4 z-30">
          <AnimatePresence>
            {error ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="px-4 py-2 bg-red-500 text-white rounded-2xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-red-500/20"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {error}
              </motion.div>
            ) : preview && !uploading && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="size-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20"
              >
                <CheckCircle2 className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
