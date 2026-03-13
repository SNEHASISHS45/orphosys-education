import Link from "next/link";
import { ChevronRight, ArrowRight, Video, Calendar, User } from "lucide-react";
import Image from "next/image";

const liveCourses = [
  {
    title: "Vedic Math Class",
    price: "₹1000",
    duration: "03 Month",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOWnQTPWHZqL9Bsip66io7TX5nXIdaT1FrBvvVtQQkJoSOnLKxGr3u58ETJpG0t7gRq8CmAYV2iuD_ukDR_Co1HCXF8-83gdY-ndOs3wJdCRG8Uv4V51sA_Fdriiqv7O3v9Dnic-aI9cKX_SEex7Ogz4FbEG3V1uPuWTiitK0DsAUYU4Egjtiza3sTaxn3RrCHNIXYnY_VkW5HWveiNcfE_n9jvrga5az8U7cmt-JUxmtHFNj5tJREVZ5qLJlaloFxJrnC0tO8KpI"
  },
  {
    title: "Positive Parenting Programme",
    price: "₹449",
    duration: "03 Month",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARnpKnEyAJrCESA3cJ5Si-M3LDnFvuP9I4y3mVL7_kZDoaHz_r0y76C-qu17yFibmDggcGyFiB4JAbIbKOGuqPfmUY8XKeVNHElFq4TP0RwgxvvC4ot2uWpB6dAGu-ugwvZc4TdNPPax8m1ZB3nnWQPo0y7gwsrH_hv2UGXjC7T81HP0HZxGh-F-j-_JZNzgQwJnp-r1E1ir1RNjXYNNEo0WrQbeEI8kWz7ENHLQOhJGp6apvz8YxfsHMybOZ_JvTcXGNxqJPmmrQ"
  },
  {
    title: "Job Ready Course",
    price: "₹2499",
    duration: "03 Month",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByIRGgtbFek8pIQXMWKcAIa-3WEHgz2IsvGUc6w_dQDfbl4dZc1zI3D24CgdoP6VdnFWJB95sQgMaxi7-Gt7qMoPp3Zc9a-W8dQ_FkPagUQFzjBcjWkWcVC7RLqs2dLFBSeEyFVxhtd_i8NQw65uEa5KMqFRrL6pB6ir8QzQadcy90W7nNuRmCrNGV0WPgyKjR6-jbYMeqZouDxzxJv_AA0XrhByJ1EJKY1UBPdrYOIlDhALFVpeyhFW3ycxe_r0xIE8kPx3iaW_8"
  }
];

export default function OnlineLiveCoursesPage() {
  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Header & Breadcrumb */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link className="hover:text-primary transition-colors" href="/courses">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-primary">Online Live</span>
        </nav>
        
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-100 text-red-600 text-[9px] font-black uppercase tracking-[0.2em] mb-3">
             <div className="size-1.5 rounded-full bg-red-600 animate-pulse"></div>
             Live Sessions
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4 italic">
            Online Live <span className="text-primary not-italic uppercase tracking-tighter">Courses</span>
          </h1>
          <p className="text-base text-slate-600 font-bold leading-relaxed max-w-xl">
            Interactive live sessions with expert instructors designed to transform your skills.
          </p>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Video className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-black text-slate-900 text-sm">HD Streaming</h4>
                  <p className="text-[10px] text-slate-500 font-bold">Crystal clear experience</p>
               </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-black text-slate-900 text-sm">Expert Trainers</h4>
                  <p className="text-[10px] text-slate-500 font-bold">Direct interaction</p>
               </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-black text-slate-900 text-sm">Flexible Batches</h4>
                  <p className="text-[10px] text-slate-500 font-bold">Scheduled for you</p>
               </div>
            </div>
         </div>
      </section>

      {/* Course Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {liveCourses.map((course, i) => (
             <div key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                   <Image className="object-cover group-hover:scale-105 transition-transform duration-700" src={course.image} alt={course.title} fill />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                   <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors mb-4 leading-tight">
                      {course.title}
                   </h3>
                   
                   <div className="space-y-3 mb-6 text-[11px] font-black uppercase tracking-wider">
                      <div className="flex items-center justify-between text-slate-400">
                         <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[16px]">payments</span>
                            Price
                         </span>
                         <span className="text-slate-900">{course.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                         <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[16px]">calendar_today</span>
                            Duration
                         </span>
                         <span className="text-slate-900">{course.duration}</span>
                      </div>
                   </div>

                   <button className="mt-auto w-full group/btn relative bg-primary text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-primary/20">
                      <span className="relative z-10">Enroll to Live Class</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                      <div className="absolute inset-x-0 bottom-0 h-0 bg-white/10 transition-all group-hover/btn:h-full"></div>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-10">
         <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 size-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h3 className="text-2xl font-black mb-3">Don&apos;t See Your Topic?</h3>
            <p className="text-slate-400 font-bold text-sm max-w-lg mx-auto mb-6">Suggest a course for our next series and get early bird access.</p>
            <Link className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/90 transition-all active:scale-95" href="/contact">
               Contact Support
            </Link>
         </div>
      </section>
    </main>
  );
}
