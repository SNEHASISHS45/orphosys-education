"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, Clock, GraduationCap, ChevronRight, Star } from "lucide-react";
import ProgramModal from "@/components/ui/ProgramModal";

interface PopularCoursesProps {
  courses?: any[];
}

export default function PopularCourses({ courses = [] }: PopularCoursesProps) {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  // If no courses from DB, we could show fallback but let's assume courses are passed
  const displayCourses = courses.length > 0 ? courses.slice(0, 3) : [];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 animate-fade-in-up">
          <div className="text-center md:text-left">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 inline-block">Trending Now</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Popular <span className="text-gradient">Courses</span>
            </h2>
            <div className="w-16 h-1 bg-primary mr-auto ml-auto md:ml-0 rounded-full"></div>
          </div>
          <Link className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl flex items-center gap-2 group hover:border-primary hover:text-primary transition-all shadow-sm" href="/courses">
            View All Courses
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCourses.map((course: any, idx: number) => (
            <div
              key={course.id}
              onClick={() => setSelectedProgram(course)}
              style={{"--delay": `${idx * 0.1}s`} as React.CSSProperties}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-primary/20 animate-fade-in-up"
            >
              <div className="h-56 relative overflow-hidden">
                {course.imageUrl && (
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-10 border border-white/20">
                  {course.category}
                </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">{course.title}</h4>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-bold mb-8">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-primary" /> {course.level || "Beginner"}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Course Fee</span>
                    <span className="text-2xl font-black text-slate-900">{course.price}</span>
                  </div>
                  <button className="w-12 h-12 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-primary/10 flex items-center justify-center">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
}
