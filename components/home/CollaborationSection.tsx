"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const collaborations = [
  {
    name: "Turning Point Education",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800", // Placeholder
    tagline: "Inspiring Excellence",
  },
  {
    name: "ProCreative",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", // Placeholder
    tagline: "Think Big Think Better",
  },
  {
    name: "St. Stephen's School",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", // Placeholder
    tagline: "Learn Love Serve",
  },
];

export default function CollaborationSection() {
  return (
    <section className="py-20 bg-slate-100 relative overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <span className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">Orphosys Education</span>
            <div className="h-[1px] w-8 bg-slate-300"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight"
          >
            Affiliations & <span className="text-primary italic">Collaborations</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group text-center"
            >
              <div className="relative w-full aspect-[3/2] mb-6 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={collab.image}
                  alt={collab.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1">{collab.name}</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{collab.tagline}</p>
              
              {/* Pagination-style dots as decorative footer in card */}
              <div className="mt-6 flex justify-center gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-primary w-4' : 'bg-slate-200'}`}></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
