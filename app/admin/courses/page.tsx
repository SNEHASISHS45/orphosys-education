"use client";

import { useState, useEffect } from "react";
import { Plus, Search, Edit2, Trash2, Loader2, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });
      if (res.ok) {
        setCourses(courses.filter((c: any) => c.id !== id));
      }
    } catch (error) {
      alert("Failed to delete course");
    }
  };

  const filteredCourses = courses.filter((c: any) => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Courses</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your educational programs and pricing.</p>
        </div>
        <Link 
          href="/admin/courses/new" 
          className="bg-primary text-white font-black px-6 py-3 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Course
        </Link>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between gap-4">
           <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium outline-none"
              />
           </div>
           <div className="flex items-center gap-2">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">{courses.length} Total</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Course</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Category</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Price</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCourses.map((course: any) => (
                <tr key={course.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                       <div className="size-12 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 relative">
                          {course.image ? (
                            <Image src={course.image} alt="" fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                               <BookOpen className="w-5 h-5" />
                            </div>
                          )}
                       </div>
                       <div>
                          <p className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors">{course.title}</p>
                          <p className="text-xs text-slate-400 font-medium">/{course.slug}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-black text-slate-600 bg-slate-100 px-3 py-1.2 rounded-full uppercase tracking-wider">
                       {course.category || "Uncategorized"}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                     <p className="text-sm font-black text-slate-900">{course.price || "Free"}</p>
                  </td>
                  <td className="px-8 py-5">
                     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                       course.isActive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                     }`}>
                        <span className={`size-1.5 rounded-full ${course.isActive ? "bg-emerald-500" : "bg-red-500"}`}></span>
                        {course.isActive ? "Active" : "Hidden"}
                     </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <Link 
                        href={`/admin/courses/${course.id}`}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-100"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => handleDelete(course.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCourses.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-8 py-12 text-center">
                    <div className="flex flex-col items-center">
                       <BookOpen className="w-12 h-12 text-slate-200 mb-4" />
                       <p className="text-slate-400 font-medium">No courses found matching your search.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
