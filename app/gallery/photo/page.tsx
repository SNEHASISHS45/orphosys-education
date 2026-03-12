import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Maximize2, Camera, Filter } from "lucide-react";
import { photos } from "@/data/gallery";

export default function PhotoGalleryPage() {
  const categories = Array.from(new Set(photos.map((p) => p.category)));

  return (
    <main className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-900 text-center">
        <div className="absolute inset-0 opacity-20">
           <Image 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE"
             alt="Gallery Background"
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
            <span className="text-white">Photos</span>
          </nav>
          
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-none italic">
            Visual <span className="text-primary not-italic uppercase tracking-tighter">Journey</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm text-slate-400 font-bold leading-relaxed mb-10">
            Capturing the moments of growth, learning, and celebration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-5 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <Camera className="w-4 h-4 text-primary" />
                <span>{photos.length} Captured Moments</span>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        <div className="bg-white rounded-[48px] p-8 lg:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100">
           {categories.map((category, catIdx) => (
             <section key={category} className={`mb-16 last:mb-0 animate-fade-in-up`} style={{ animationDelay: `${catIdx * 0.1}s` }}>
               <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6">
                 <div>
                    <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-3 inline-block">Collection</span>
                    <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3 italic">
                       <span className="material-symbols-outlined text-2xl text-primary font-black not-italic">
                          {category === "Collage Activities" ? "diversity_3" : "domain"}
                       </span>
                       {category}
                    </h3>
                 </div>
                 <div className="w-full md:w-auto h-1 bg-slate-50 rounded-full flex-grow mx-8 hidden lg:block"></div>
                 <div className="text-slate-400 font-black text-[10px] uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                    {photos.filter(p => p.category === category).length} Moments
                 </div>
               </div>
               
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {photos
                    .filter((p) => p.category === category)
                    .map((photo, idx) => (
                      <div
                        key={photo.id}
                        className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-square shadow-lg hover:shadow-xl transition-all duration-700 border-2 border-white"
                      >
                        <Image
                          src={photo.url}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
                          <div className="w-10 h-10 bg-white rounded-xl shadow-xl flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                             <Maximize2 className="text-primary w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
             </section>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4">
         <div className="max-w-4xl mx-auto bg-slate-900 rounded-[40px] p-10 lg:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 tracking-tight leading-tight uppercase">Ready to <span className="text-primary italic">Start?</span></h2>
            <Link href="/courses" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-primary/30">
               Explore Courses
               <ChevronRight className="w-4 h-4" />
            </Link>
         </div>
      </section>
    </main>
  );
}
