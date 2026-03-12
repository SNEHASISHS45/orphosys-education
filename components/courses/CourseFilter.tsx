"use client";

import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";

interface CourseFilterProps {
  onFilterChange: (category: string, duration: string) => void;
}

const CATEGORIES = ["All Categories", "ABACUS", "DMIT", "SKILLS", "WELLNESS", "LANGUAGES"];
const DURATIONS = ["All Durations", "03 Month", "06 Month", "12 Month", "One Time"];

export default function CourseFilter({ onFilterChange }: CourseFilterProps) {
  const [category, setCategory] = useState("All Categories");
  const [duration, setDuration] = useState("All Durations");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [durationOpen, setDurationOpen] = useState(false);

  const handleApply = () => {
    onFilterChange(
      category === "All Categories" ? "all" : category,
      duration === "All Durations" ? "all" : duration
    );
  };

  return (
    <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/50 flex flex-wrap gap-6 mb-12 relative z-40">
      <div className="flex-1 min-w-[280px] relative">
        <label className="block text-sm font-bold text-slate-700 mb-2 px-1">Choose Category</label>
        <button
          onClick={() => {
            setCategoryOpen(!categoryOpen);
            setDurationOpen(false);
          }}
          className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-700 font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all group"
        >
          <span>{category}</span>
          <ChevronDown className={`w-5 h-5 text-slate-400 group-hover:text-primary transition-all ${categoryOpen ? "rotate-180" : ""}`} />
        </button>
        {categoryOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl overflow-hidden p-2 z-50 animate-fade-in">
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setCategoryOpen(false);
                }}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors ${
                  category === cat ? "bg-primary/10 text-primary" : "text-slate-800 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 min-w-[280px] relative">
        <label className="block text-sm font-bold text-slate-700 mb-2 px-1">Choose Duration</label>
        <button
          onClick={() => {
            setDurationOpen(!durationOpen);
            setCategoryOpen(false);
          }}
          className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-700 font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all group"
        >
          <span>{duration}</span>
          <ChevronDown className={`w-5 h-5 text-slate-400 group-hover:text-primary transition-all ${durationOpen ? "rotate-180" : ""}`} />
        </button>
        {durationOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl overflow-hidden p-2 z-50 animate-fade-in">
            {DURATIONS.map((dur) => (
              <div
                key={dur}
                onClick={() => {
                  setDuration(dur);
                  setDurationOpen(false);
                }}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors ${
                  duration === dur ? "bg-primary/10 text-primary" : "text-slate-800 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {dur}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-end">
        <button
          onClick={handleApply}
          className="bg-primary text-white px-10 py-3.5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}
