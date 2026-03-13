"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Award, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
// @ts-ignore
import { Program } from "@/data/programs";

interface ProgramModalProps {
  program: (Partial<Program> & { image?: string; desc?: string; shortDesc?: string; facebookUrl?: string; instagramUrl?: string; linkedinUrl?: string }) | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramModal({
  program,
  isOpen,
  onClose,
}: ProgramModalProps) {
  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white text-slate-500 hover:text-slate-900 transition shadow-md"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image / Feature Graphic */}
              <div className="hidden md:block md:w-2/5 bg-slate-100 relative min-h-[400px]">
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.title || "Program Image"}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${program.color || "bg-slate-100"}`}>
                    <span className="material-symbols-outlined text-8xl opacity-20">
                      {program.icon || "help"}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col md:w-3/5 max-h-[90vh]">
                <div className="p-8 md:p-10 overflow-y-auto">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${program.color || "bg-primary text-white"}`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {program.icon || "help"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    {program.title || "Profile Detail"}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {program.desc}
                  </p>

                  {/* Features */}
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Key Features & Benefits
                  </h4>

                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {program.features?.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-slate-600 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Social Links for Team Members */}
                  {(program.facebookUrl || program.instagramUrl || program.linkedinUrl) && (
                    <div className="pt-6 border-t border-slate-100 mb-8">
                       <h4 className="font-semibold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Professional Channels</h4>
                       <div className="flex gap-4">
                          {program.facebookUrl && (
                             <a href={program.facebookUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-primary hover:bg-primary/5 transition-all">
                                <Facebook className="w-5 h-5" />
                             </a>
                          )}
                          {program.instagramUrl && (
                             <a href={program.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-primary hover:bg-primary/5 transition-all">
                                <Instagram className="w-5 h-5" />
                             </a>
                          )}
                          {program.linkedinUrl && (
                             <a href={program.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-primary hover:bg-primary/5 transition-all">
                                <Linkedin className="w-5 h-5" />
                             </a>
                          )}
                       </div>
                    </div>
                  )}
                </div>

                {/* Sticky Footer */}
                <div className="flex gap-4 p-6 border-t bg-white/80 backdrop-blur sticky bottom-0">
                  <button className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.03] hover:bg-primary/90 transition">
                    Enroll Now
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
