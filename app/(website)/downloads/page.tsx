"use client";

import Link from "next/link";
import { ChevronRight, FileText, Download, MessageCircle, ArrowRight } from "lucide-react";

const downloadFiles = [
  { id: 1, name: "Proposal for Schools & Institutions", type: "PDF", size: "1.2 MB" },
  { id: 2, name: "Curriculum Overview 2024-25", type: "PDF", size: "4.5 MB" },
  { id: 3, name: "Institutional Affiliation Data Sheet", type: "DOCX", size: "850 KB" },
  { id: 4, name: "Comprehensive Student Handbook", type: "PDF", size: "3.1 MB" },
  { id: 5, name: "Scholarship & Grant Application", type: "PDF", size: "520 KB" },
];

export default function DownloadsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <nav className="flex justify-center items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
            <span className="text-white">Research & Downloads</span>
          </nav>
          
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-none italic">
            Resource <span className="text-primary not-italic uppercase tracking-tighter">Center</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm text-slate-400 font-bold leading-relaxed mb-10">
            Download official documentation, curriculum guides, and institutional resources to better understand our methodology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-5 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <Download className="w-4 h-4 text-primary" />
                <span>Secure Downloads Available</span>
             </div>
          </div>
        </div>
      </section>

      {/* Downloads Table Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
        <div className="bg-white rounded-[64px] shadow-3xl shadow-slate-200/50 border border-slate-100 overflow-hidden animate-fade-in-up">
          <div className="p-10 lg:p-20 border-b border-slate-100 bg-slate-50/30">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 inline-block">Official Documents</span>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Sample File Download</h2>
                </div>
                <div className="bg-white p-6 rounded-[32px] border-4 border-slate-50 flex items-center gap-5 shadow-xl">
                   <div className="p-3 bg-primary/10 rounded-2xl">
                      <FileText className="text-primary w-8 h-8" />
                   </div>
                   <div>
                      <p className="text-xl font-black text-slate-900 leading-none">Public API</p>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">v.2.0.4 Licensed</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">ID</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Resource Name</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Size</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {downloadFiles.map((file, idx) => (
                  <tr key={file.id} className="hover:bg-primary/5 transition-all duration-500 group">
                    <td className="px-8 py-6">
                       <span className="text-lg font-black text-slate-200 group-hover:text-primary transition-colors italic">
                          {String(file.id).padStart(2, '0')}
                       </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-primary/20 transition-colors">
                          <FileText className="text-slate-400 group-hover:text-primary transition-colors w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 mb-0.5 group-hover:text-primary transition-colors tracking-tight uppercase">{file.name}</p>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{file.type} Format</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className="px-3 py-1 bg-slate-100 rounded text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">
                          {file.size}
                       </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="h-10 px-6 bg-white border-2 border-slate-50 rounded-xl font-black text-xs uppercase tracking-widest text-primary flex items-center justify-center gap-2 ml-auto hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md shadow-slate-100 hover:shadow-primary/20 active:scale-95 group/btn">
                        <Download className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="pb-24 px-4 animate-fade-in-up">
         <div className="max-w-4xl mx-auto bg-slate-900 rounded-[48px] p-10 lg:p-16 text-center relative overflow-hidden shadow-3xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight leading-tight uppercase">Custom Request?</h2>
            <p className="text-slate-400 font-bold text-base mb-10 max-w-xl mx-auto leading-relaxed">Our office handles custom requests for academic data, certifications, and institutional proposals.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact" className="px-10 py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                  Contact Support
                  <MessageCircle className="w-5 h-5" />
               </Link>
               <Link href="/courses" className="px-10 py-4 bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                  Back to Courses
                  <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
