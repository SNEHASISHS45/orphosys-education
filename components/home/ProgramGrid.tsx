"use client";

import { useState } from "react";
import { programs, Program } from "@/data/programs";
import ProgramModal from "@/components/ui/ProgramModal";
import { MoveRight, Smartphone } from "lucide-react";

export default function ProgramGrid() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const mainPrograms = programs.slice(0, 8);

  const openModal = (program: Program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative bg blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 inline-block">Specialized Learning</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Our Core <span className="text-gradient">Programs</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainPrograms.map((program, idx) => (
            <div
              key={program.id}
              onClick={() => openModal(program)}
              style={{"--delay": `${idx * 0.1}s`} as React.CSSProperties}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col items-center text-center relative overflow-hidden animate-fade-in-up hover:-translate-y-1 ${
                program.id === "app" 
                  ? "bg-slate-900 border-slate-900 shadow-lg shadow-slate-900/20" 
                  : "bg-white border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 shadow-md relative ${
                  program.id === "app" ? "bg-primary text-white" : "bg-slate-50 text-primary"
                }`}
              >
                {program.id === "app" ? (
                   <Smartphone className="w-8 h-8" />
                ) : (
                  <span className="material-symbols-outlined text-3xl font-light">
                    {program.icon}
                  </span>
                )}
              </div>
              
              <h3 className={`text-xl font-bold mb-2 tracking-tight ${program.id === "app" ? "text-white" : "text-slate-900"}`}>
                {program.title}
              </h3>
              <p className={`text-sm font-medium leading-relaxed mb-6 ${program.id === "app" ? "text-slate-400" : "text-slate-500"}`}>
                {program.shortDesc}
              </p>
              
              <div className={`mt-auto p-3 rounded-xl transition-all duration-300 ${
                  program.id === "app" 
                    ? "bg-white/10 text-white group-hover:bg-primary" 
                    : "bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white"
                }`}>
                 <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={closeModal}
      />
    </section>
  );
}
