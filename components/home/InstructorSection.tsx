"use client";

import { useState } from "react";
import Image from "next/image";
import ProgramModal from "@/components/ui/ProgramModal";
import { GraduationCap, Award, BookOpen, Facebook, Instagram, Linkedin } from "lucide-react";

interface InstructorSectionProps {
  team?: any[];
}

export default function InstructorSection({ team = [] }: InstructorSectionProps) {
  const [selectedInstructor, setSelectedInstructor] = useState<any>(null);

  const openModal = (inst: any) => {
    setSelectedInstructor(inst);
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
          {team.map((inst, idx) => (
            <div
              key={inst.id}
              onClick={() => openModal(inst)}
              style={{"--delay": `${idx * 0.1}s`} as React.CSSProperties}
              className="group cursor-pointer animate-fade-in-up"
            >
              <div
                className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              >
                {inst.imageUrl && (
                  <Image
                    src={inst.imageUrl}
                    alt={inst.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Social Links Overlay - Premium Hover Effect */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                   <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50 flex flex-col items-center">
                      <div className="flex gap-3 mb-3">
                         {inst.facebookUrl && (
                            <a 
                              href={inst.facebookUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all scale-90 hover:scale-100"
                            >
                               <Facebook className="w-4 h-4" />
                            </a>
                         )}
                         {inst.instagramUrl && (
                            <a 
                              href={inst.instagramUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all scale-90 hover:scale-100"
                            >
                               <Instagram className="w-4 h-4" />
                            </a>
                         )}
                         {inst.linkedinUrl && (
                            <a 
                              href={inst.linkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all scale-90 hover:scale-100"
                            >
                               <Linkedin className="w-4 h-4" />
                            </a>
                         )}
                      </div>
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Connect Professional</p>
                   </div>
                </div>

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
        program={selectedInstructor ? { 
          ...selectedInstructor, 
          image: selectedInstructor.imageUrl, 
          desc: selectedInstructor.bio, 
          shortDesc: selectedInstructor.role,
          facebookUrl: selectedInstructor.facebookUrl,
          instagramUrl: selectedInstructor.instagramUrl,
          linkedinUrl: selectedInstructor.linkedinUrl
        } : null}
        isOpen={!!selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
      />
    </section>
  );
}
