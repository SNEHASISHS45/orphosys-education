import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight uppercase">Feedback</h2>
        <div className="flex justify-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-yellow-400 text-sm">
              star
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-slate-50 p-6 rounded-xl border border-slate-100 italic text-slate-600 relative overflow-hidden"
          >
            <span className="material-symbols-outlined text-primary/10 text-4xl block mb-3">
              format_quote
            </span>
            <span className="text-sm font-bold leading-relaxed relative z-10">&quot;{testimonial.content}&quot;</span>
            <div className="mt-5 flex items-center gap-3">
              <div className="size-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-xs">person</span>
              </div>
              <div>
                <p className="not-italic font-black text-slate-900 text-xs tracking-tight">{testimonial.name}</p>
                <p className="not-italic text-[10px] text-slate-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
