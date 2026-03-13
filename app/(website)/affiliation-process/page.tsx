import Link from "next/link";
import { ChevronRight, CheckCircle, Smartphone, Landmark, FileText, Scale, RefreshCw, ArrowRight } from "lucide-react";

export default function AffiliationProcessPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb & Title Section */}
      <section className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-900 font-black">Affiliation Process</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight italic leading-tight">
            Affiliation <span className="text-primary italic">Process</span>
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-xl leading-relaxed font-bold">
            Empowering entrepreneurs to transform education. Join our global network of learning centers.
          </p>
        </div>
      </section>

      {/* Affiliation Fees Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Affiliation Fees</h2>
            <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              No Renewal Fees
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* DMIT */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">DMIT Center</h3>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-black text-slate-900">₹24,999/-</span>
                <span className="text-slate-500 text-xs font-bold">One-time</span>
              </div>
              <ul className="space-y-3 mb-6">
                {["DMIT Franchise Rights", "Basic Support Package", "Initial Training Session"].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                    <CheckCircle className="text-primary w-4 h-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-xl border-2 border-primary text-primary text-sm font-black hover:bg-primary hover:text-white transition-all uppercase tracking-widest">Select Plan</button>
            </div>

            {/* ABACUS */}
            <div className="bg-white rounded-2xl border-2 border-primary p-6 shadow-xl shadow-primary/5 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
              <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Abacus Center</h3>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-black text-slate-900">₹49,999/-</span>
                <span className="text-slate-500 text-xs font-bold">One-time</span>
              </div>
              <ul className="space-y-3 mb-6">
                {["Full Abacus Curriculum", "Marketing Kit & Branding", "Premium Teacher Support"].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                    <CheckCircle className="text-primary w-4 h-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-black hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest">Select Plan</button>
            </div>

            {/* COMBO */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">DMIT & Abacus</h3>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-black text-slate-900">₹74,999/-</span>
                <span className="text-slate-500 text-xs font-bold">One-time</span>
              </div>
              <ul className="space-y-3 mb-6">
                {["Combined Center Rights", "Priority Support", "Master Training"].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                    <CheckCircle className="text-primary w-4 h-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-xl border-2 border-primary text-primary text-sm font-black hover:bg-primary hover:text-white transition-all uppercase tracking-widest">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Franchisee Terms */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Franchisee Terms & Eligibility</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Scale className="w-8 h-8" />, title: "Space Requirement", desc: "Dedicated area of 200 - 250 sq. ft. for learning." },
              { icon: <RefreshCw className="w-8 h-8" />, title: "No Age Bar", desc: "Open to all passionate educators and entrepreneurs." },
              { icon: <FileText className="w-8 h-8" />, title: "Free Study Material", desc: "Complete training materials provided at no cost." },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Legal Compliances", desc: "Adhere to Orphosys operational guidelines." },
              { icon: <Landmark className="w-8 h-8" />, title: "Teacher Qualification", desc: "Minimum 10+2 with good communication skills." },
              { icon: <Smartphone className="w-8 h-8" />, title: "Local Marketing", desc: "Responsible for center promotion within 5km radius." }
            ].map((term, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
                <div className="text-primary">{term.icon}</div>
                <h4 className="font-bold text-slate-900">{term.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{term.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-16">Steps to Open Your Study Centre</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
             {[
               { step: "1", title: "Visit Website", desc: "Explore our vision and offerings." },
               { step: "2", title: "Fill Form", desc: "Provide basic details via enquiry form." },
               { step: "3", title: "Pay Fees", desc: "Complete one-time affiliation payment." },
               { step: "4", title: "Expert Call", desc: "Final onboarding with our experts." }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center">
                  <div className="size-14 rounded-full bg-white text-primary flex items-center justify-center text-xl font-black mb-6 shadow-xl">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-primary-foreground/70 text-sm font-medium">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 -z-10"></div>
             <h2 className="text-3xl sm:text-4xl font-black mb-6">Ready to Empower Your Future?</h2>
             <p className="text-slate-400 font-medium text-lg mb-10">Join thousands of educators who have transformed their careers through Orphosys.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/apply-online" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                   Apply for Affiliation <ArrowRight className="w-5 h-5" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
