import Link from "next/link";
import { ChevronRight, CheckCircle, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "Vedic Math Class",
    category: "VEDIC MATH",
    price: "₹1000",
    duration: "03 Month",
    students: "100+ Students Enrolled",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQDlbMb5YXANERGJes1LuUM4X3E2GaiZT7_AxE0_btdCYHeA2DjE7CqXBkHh-_Jts5eiqA1Qgo3ZOilJdTkG5O8skQeF8So5gopbtx-v3IYiG6JZPRF1Jfp0ouS7G6v75ukwgyqpo__7-wrhZTl7S0RHPXGs2FeEmtNKnzg97HWXVohG6shImjQfGWdXV5cFXnRLRBBWCSGIcRhdqitSg2H2xuliKKADe7KfM5sZIiAtD3ykWFh7GOTEYg8TYIhDq00hKtxSuVAg"
  },
  {
    title: "Abacus Class",
    category: "ABACUS",
    price: "₹1200",
    duration: "04 Month",
    students: "250+ Students Enrolled",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA20BXr6cBvTsvY-eh9lTYnq5WpW4zKzqIN7vxF1Y34eHRjfsUfdyV8hlOXp15W2lEtnwnMypylRTF4mcRM9G5TW6XPUU7lKKSZYX47bdWgo8KBbGkD7E75HfnbMWfFwBfhDveXfjG6iqgh5qthAFmlz7ugJgkjyxhv-p27Ce-bIZ9YX4bcDCCcS12QXuO5Iif1rlYHuILtBEPLojxsrPMVggT2WtI8bBmo_e1uqBGizRcZkrqyfqkTbkm9oLlfy8hnqwuh1iqJgSw"
  },
  {
    title: "Chess Class",
    category: "CHESS",
    price: "₹1500",
    duration: "02 Month",
    students: "80+ Students Enrolled",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm2ykrc3AMiACD2_ajV2LtG6C9SpjBUnwaoiIzlOKt04tjc3SXOH9lE30hlq15dC8arb67zfwLN8Ts510yE87xWRT3OEbhLFD-vrJv93mMMFsZSVXOvb5fkmh5Ybn2HOgvCUVhH2Ty0E1_cfeAF4GxUcO9UkPCAeogJ-hQW9nUgjaejQumOXMOVSRntidoF8-hJh2maPJdWkPzUWAQ3tUVNo87TWN2pl4FL57EfdDF4zzhxkezp4VymrrE50rXuGfsP0-PloBIedI"
  }
];

export default function OnlineReadyCoursesPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900">Online Ready</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 py-12 px-8 text-center sm:py-16 shadow-2xl">
          <div className="absolute inset-0 opacity-40 bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDJg0Sm3hgcANhR00sMylBP4WMyBgZn21pVsrqX2dWpXasdaq8faQs4JQWKScgUzA5l73L2CQhqFbG4MNESQE-T6D5xE-DSdfi0YjhGf0FuZVqucNkd_F1YgfOuoNgYalhuW53S-6U9l9aZ91Y5BytT00MjK2xw9872zMWLH8idtqrZZC-otosXb4oKg9gLzzbnqAsXSv28zbYIvY517Oz8SXtUMd7i7dDProwS5eU-FCaB--EJtvvVvnEnCadCrSkt7WR98atyK4')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center gap-3">
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight italic">
              Online Ready <span className="text-primary not-italic uppercase">Courses</span>
            </h1>
            <p className="max-w-xl text-base text-slate-300 font-bold leading-relaxed">
              Self-paced courses designed for excellence. Master new skills from the comfort of your home.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-[9px] font-black text-primary border border-primary/30 backdrop-blur-sm uppercase tracking-widest">
                <CheckCircle className="w-3 h-3" />
                Verified
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-3 py-1 text-[9px] font-black text-blue-400 border border-blue-500/30 backdrop-blur-sm uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                Lifetime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Titles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
           <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Explore Programs</h2>
              <p className="text-slate-500 font-bold text-xs mt-1">Pick a course that fits your journey</p>
           </div>
           <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {["All Courses", "Abacus", "Vedic Math", "Chess"].map((cat, i) => (
                <button key={cat} className={`whitespace-nowrap px-5 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}>
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {courses.map((course, i) => (
             <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all h-fit">
                <div className="aspect-video relative overflow-hidden">
                   <Image className="object-cover group-hover:scale-105 transition-transform duration-700" src={course.image} alt={course.title} fill />
                   <div className="absolute top-3 left-3">
                      <span className="bg-primary/95 text-white px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{course.category}</span>
                   </div>
                </div>
                <div className="p-5">
                   <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors tracking-tight leading-tight">{course.title}</h3>
                      <span className="text-lg font-black text-primary">{course.price}</span>
                   </div>
                   <div className="space-y-2.5 mb-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                         <Clock className="w-3.5 h-3.5 text-primary" />
                         <span>Duration: <strong className="text-slate-900">{course.duration}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                         <span className="material-symbols-outlined text-primary text-[18px]">group</span>
                         <span className="text-slate-900">{course.students}</span>
                      </div>
                   </div>
                   <button className="w-full flex items-center justify-center gap-2 bg-slate-50 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      Enroll Today
                      <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* No Courses Found (Placeholder) */}
      {courses.length === 0 && (
        <div className="text-center py-20 px-8">
           <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-slate-400 text-4xl">inventory_2</span>
           </div>
           <h3 className="text-2xl font-bold text-slate-900">No courses found</h3>
           <p className="text-slate-500 mt-2">Check back later or try a different category.</p>
        </div>
      )}
    </main>
  );
}
