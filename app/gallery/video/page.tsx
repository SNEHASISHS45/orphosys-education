import Link from "next/link";
import Image from "next/image";
import { ChevronRight, PlayCircle, Video, Clock, Share2 } from "lucide-react";
import { videos } from "@/data/gallery";

export default function VideoGalleryPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-900 text-center">
        <div className="absolute inset-0 opacity-20">
           <Image 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE"
             alt="Video Gallery Background"
             fill
             className="object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <nav className="flex justify-center items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
            <span className="text-primary italic">Gallery</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
            <span className="text-white">Videos</span>
          </nav>
          
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-none italic">
            Learning <span className="text-primary not-italic uppercase tracking-tighter">Action</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm text-slate-400 font-bold leading-relaxed mb-10">
            Watch our specialized programs in action through our curated collection.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-5 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <Video className="w-4 h-4 text-primary" />
                <span>{videos.length} Educational Videos</span>
             </div>
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
        <div className="bg-white rounded-[48px] p-8 lg:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="animate-fade-in-up">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-3 inline-block">Latest Releases</span>
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3 italic">
                <span className="material-symbols-outlined text-3xl text-primary font-black not-italic">new_releases</span>
                Educational Content
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <div 
                key={video.id} 
                className="group cursor-pointer animate-fade-in-up" 
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-100 mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-700 border-2 border-white">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center">
                      <PlayCircle className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary text-white text-[9px] px-3 py-1 rounded-full font-black tracking-widest uppercase shadow-xl flex items-center gap-1.5">
                    <Clock className="w-2.5 h-2.5" />
                    {video.duration}
                  </div>
                </div>
                
                <div className="px-2">
                   <h4 className="font-black text-lg text-slate-900 group-hover:text-primary transition-colors mb-2 tracking-tight leading-tight uppercase">
                     {video.title}
                   </h4>
                   <p className="text-xs text-slate-500 font-bold leading-relaxed line-clamp-2">
                     {video.description}
                   </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-10 py-4 bg-white border-2 border-slate-50 text-slate-900 font-black rounded-2xl hover:border-primary hover:text-primary transition-all shadow-xl shadow-slate-100 active:scale-95 text-xs uppercase tracking-widest flex items-center gap-3 mx-auto">
              Load More Gallery
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 px-4 animate-fade-in-up">
         <div className="max-w-4xl mx-auto bg-primary rounded-[40px] p-10 lg:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 tracking-tight leading-tight uppercase italic">Join Orphosys <span className="not-italic">Today</span></h2>
            <Link href="/student/login" className="inline-flex items-center gap-3 bg-white text-primary px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all hover:scale-105 shadow-xl shadow-white/10">
               Register Now
               <ChevronRight className="w-4 h-4" />
            </Link>
         </div>
      </section>
    </main>
  );
}
