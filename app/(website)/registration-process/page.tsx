import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Verified, School, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

export default function RegistrationProcessPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <nav className="flex justify-center items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-primary">Registration Process</span>
          </nav>
          
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight italic">
            Registration <span className="text-primary uppercase tracking-tight not-italic">Process</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-base text-slate-600 leading-relaxed font-bold mb-8">
            Government Registered Body providing a clear path to success through IT & Skill Development excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/student/login">
              <button className="bg-primary text-white px-6 py-3.5 rounded-xl font-black text-base hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 uppercase tracking-widest">
                Enrol Now
              </button>
            </Link>
            <div className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
               <span className="text-xs font-black text-slate-900 uppercase tracking-tight">2,000+ Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Board */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Cert / Branding */}
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border-4 border-slate-50 group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGdFJPofqgLQGFgBK-6Kwut0Vm6K98cwoRUKhuLLhi2KFrjAVLb32WLVY_s8s3kga8aenG-yseH6Ro4Em4Z83v9_62fyCdpaOfYwUPq6CkCb6WkVQgTZAzsA8vsIQ3VLI5QmtIox-XDW-zJodHpQBbzz_bMR3Wigv5xHh1RAxhMBJj29hCaonelXd6jsMRGnA0HMRDQf_C4L1C2mYIgKxX-P5r_GhPRdeuZnt1xH72IvJvPXtyOh7iTfvU0e7TgI7rRtQYfOWXeAU"
                  alt="Certification"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Steps/Content */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight uppercase">IT & Skill Development</h2>
              <div className="space-y-4 text-slate-600 font-bold text-sm leading-relaxed">
                 <p className="text-sm text-slate-800 font-black italic border-l-4 border-primary pl-4 py-1.5 bg-primary/5 rounded-r-lg">
                    &quot;Registered Under: Niti Aayog & Ministry of HRD Govt. of India.&quot;
                 </p>
                 <p>
                    Bringing to you an efficient path to find your success and self identity.
                 </p>
                 <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <School className="text-primary w-6 h-6 mb-3" />
                       <h4 className="font-black text-slate-900 text-xs uppercase tracking-wide">Practical Lab</h4>
                       <p className="text-[10px] text-slate-500">Modern IT facilities.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <Lightbulb className="text-primary w-6 h-6 mb-3" />
                       <h4 className="font-black text-slate-900 text-xs uppercase tracking-wide">Right Path</h4>
                       <p className="text-[10px] text-slate-500">Your success path.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Begin?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/student/login" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">Enroll Now</Link>
               <Link href="/contact" className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-slate-50">Contact Counselor</Link>
            </div>
         </div>
      </section>
    </main>
  );
}
