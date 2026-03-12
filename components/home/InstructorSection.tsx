"use client";

import { useState } from "react";
import Image from "next/image";
import { instructors, Instructor } from "@/data/instructors";
import ProgramModal from "@/components/ui/ProgramModal";
import { Program } from "@/data/programs";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function InstructorSection() {
  const [selectedInstructor, setSelectedInstructor] = useState<Program | null>(
    null
  );

  const openModal = (inst: Instructor) => {
    const mapped: Program = {
      id: inst.id,
      title: inst.name,
      shortDesc: inst.role,
      desc: inst.desc,
      icon: inst.icon,
      color: inst.color,
      features: inst.features,
      image: inst.image,
    };
    setSelectedInstructor(mapped);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 inline-block">Mentors of Excellence</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Expert <span className="text-gradient">Instructors</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
           <p className="mt-8 text-base text-slate-500 font-bold max-w-xl mx-auto leading-relaxed">Learn from industry leading specialists dedicated to nurturing young potential.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {instructors.map((inst, idx) => (
            <div
              key={inst.id}
              onClick={() => openModal(inst)}
              style={{"--delay": `${idx * 0.1}s`} as React.CSSProperties}
              className="group cursor-pointer animate-fade-in-up"
            >
              <div
                className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              >
                <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="flex gap-2 mb-2">
                      <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg"><GraduationCap className="w-4 h-4 text-white" /></div>
                      <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg"><Award className="w-4 h-4 text-white" /></div>
                      <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg"><BookOpen className="w-4 h-4 text-white" /></div>
                   </div>
                   <p className="text-white text-xs font-black uppercase tracking-widest">View Profile</p>
                </div>
              </div>
              <div className="text-center">
                 <h5 className="text-xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-primary transition-colors">{inst.name}</h5>
                 <p className="text-sm font-bold text-primary uppercase tracking-widest">{inst.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProgramModal
        program={selectedInstructor}
        isOpen={!!selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
      />
    </section>
  );
}
