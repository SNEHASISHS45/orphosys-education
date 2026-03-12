"use client";

import { Star, Quote } from "lucide-react";

const patrons = [
  {
    name: "Amitava Sengupta",
    role: "Education Consultant",
    quote: '"Committed to revolutionary changes in primary education systems through cognitive science."',
  },
  {
    name: "Bratin Roy",
    role: "Social Activist",
    quote: '"Advocating for accessible mental developmental tools for every child in our society."',
  },
  {
    name: "S. Mukhopadhyay",
    role: "Educational Advisor",
    quote: '"Seeing the growth of thousands of children is the true reward for our educational foundation."',
  },
];

export default function PatronSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-16 animate-fade-in-up">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 inline-block">Our Guiding Light</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
            Distinguished <span className="text-gradient hover:brightness-110 italic transition-all">Patrons</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-8 text-base text-slate-400 font-bold max-w-xl mx-auto leading-relaxed">
            Guiding our mission with decades of wisdom, and a shared vision for a brighter future for every child.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {patrons.map((patron, index) => (
            <div
              key={index}
              style={{"--delay": `${index * 0.1}s`} as React.CSSProperties}
              className="relative p-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group animate-fade-in-up flex flex-col items-center text-center"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                 <Quote className="text-white w-6 h-6 fill-white" />
              </div>
              
              <div className="mb-8">
                 <div className="flex justify-center gap-1 mb-2">
                    {[1,2,3,4,5].map(star => (
                       <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                 </div>
              </div>

              <p className="text-base text-white font-medium italic mb-8 leading-relaxed relative">
                {patron.quote}
              </p>
              
              <div className="mt-auto">
                 <h5 className="text-2xl font-black text-white tracking-tight">{patron.name}</h5>
                 <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mt-2">{patron.role}</p>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-10 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
