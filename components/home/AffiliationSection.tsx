"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const affiliations = [
  {
    title: "PAN Card",
    description: "Permanent Account Number issued by the Income Tax Department, Govt. of India.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800", // Placeholder for PAN Card
    originalImage: "AACCO8882F", // For reference from screenshot
  },
  {
    title: "ISO 9001 : 2015",
    description: "Quality Management System certificate for Supplementary Education Unit and Counselling.",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=800", // Placeholder for ISO
    originalImage: "ISO 9001 : 2015", 
  },
  {
    title: "Certificate of Incorporation",
    description: "Certified that Orphosys Education Private Limited is incorporated under the Companies Act, 2013.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", // Placeholder for Incorporation
    originalImage: "Certificate of Incorporation",
  },
];

export default function AffiliationSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[2px] w-12 bg-primary/40"></div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Licensed by Govt of India</span>
            <div className="h-[2px] w-12 bg-primary/40"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Our <span className="text-primary">Affiliations</span>
          </motion.h2>
          <div className="w-20 h-2 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {affiliations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Glass Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-black text-lg mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-white/80 text-xs font-medium leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
