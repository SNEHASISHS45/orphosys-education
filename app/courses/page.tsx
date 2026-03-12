"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Users, BookOpen, Search, ArrowRight } from "lucide-react";
import { allCourses, Course } from "@/data/all_courses";
import CourseFilter from "@/components/courses/CourseFilter";

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(allCourses);

  const handleFilterChange = (category: string, duration: string) => {
    let results = allCourses;
    if (category !== "all") {
      results = results.filter((c) => c.category === category);
    }
    if (duration !== "all") {
      results = results.filter((c) => c.duration === duration);
    }
    setFilteredCourses(results);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <Image 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE"
             alt="Courses Background"
             fill
             className="object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <nav className="flex justify-center items-center gap-2 mb-10 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-primary text-white">Courses</span>
          </nav>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-none italic">
            Knowledge <span className="text-gradient hover:brightness-110 transition-all">Catalog</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300 font-bold leading-relaxed mb-12">
            Explore our diverse range of specialized programs designed to empower young minds and build technical expertise.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-white font-black">{allCourses.length} Comprehensive Programs</span>
             </div>
          </div>
        </div>
      </section>

      {/* Filter and Course Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
        <div className="bg-white rounded-[64px] p-8 md:p-14 lg:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="mb-16">
            <CourseFilter onFilterChange={handleFilterChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <div
                  key={course.id}
                  style={{"--delay": `${idx * 0.1}s`} as React.CSSProperties}
                  className="group bg-white rounded-[48px] overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 animate-fade-in-up"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/20">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors mb-6 tracking-tight leading-tight">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-6 text-slate-400 font-bold text-sm mb-10">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {course.studentCount}
                      </div>
                    </div>
                    
                    <button className="w-full py-5 bg-slate-50 text-slate-900 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all shadow-xl shadow-slate-100 hover:shadow-primary/30 active:scale-95 group/btn">
                      Enroll Today
                      <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-slate-400 bg-slate-50/50 rounded-[48px] border-4 border-dashed border-slate-100">
                <Search className="w-20 h-20 mb-6 stroke-[1px]" />
                <p className="text-2xl font-black text-slate-900 mb-2">No Courses Found</p>
                <p className="text-slate-500 font-bold mb-8">Try adjusting your filters or clearing them to see all results.</p>
                <button 
                  onClick={() => handleFilterChange("all", "all")}
                  className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/20"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-32 px-4 animate-fade-in-up">
         <div className="max-w-4xl mx-auto bg-slate-900 rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-tight">Can&apos;t Find the Right Course?</h2>
            <p className="text-slate-400 font-bold text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Let our expert educational counselors guide you to the perfect learning path.</p>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl shadow-white/10">
               Free Counseling
               <ChevronRight className="w-6 h-6" />
            </Link>
         </div>
      </section>
    </main>
  );
}
