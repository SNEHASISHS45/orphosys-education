"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, User, Lock, CheckCircle2, ArrowRight, Shield } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Premium Hero / Breadcrumb Section */}
      <section className="relative py-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE"
            alt="Students studying"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center animate-fade-in-up">
          <nav className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-primary text-white">Login</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight leading-none italic">
             Secure <span className="text-gradient">Access</span>
          </h1>
          <p className="max-w-xl text-slate-300 font-bold text-base leading-relaxed">Access your specialized learning portal and continue your cognitive growth journey.</p>
        </div>
      </section>

      {/* Main Content: Login Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative z-20 -mt-20">
        <div className="bg-white rounded-[48px] shadow-3xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[600px] border-4 border-white animate-fade-in-up">
          {/* Left Side: Image/Branding */}
          <div className="lg:w-1/2 relative bg-primary overflow-hidden hidden lg:block">
            <div className="absolute inset-0 opacity-30">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7uHh9YJqA9yu29g_-N458UbdWWbgLr8L66_3mJ50ZE0odY-h5mUd3buKBWa_ouAZU48y38CfDB3tl9cpygJkYjt5FUJ1-Q72hxUDK6nEudSVZGNm4cSWzEyr_V4D_dM8HpvQtFtr2WgjkOtwCpv8ftrXPoHLj-NT8BztHplh8MeoYig5jr1Ym2ZWPZj119IJtovYw0DLVVCjy4iyr62esH4oA-XYNpekHYjvq2EL9EeeU9OD6qGqkIOt2FTYQpVtOswoeWldnzQ"
                alt="Online learning platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/40"></div>
            
            <div className="relative h-full flex flex-col justify-center p-20 text-white">
              <div className="mb-12">
                <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-3xl border-2 border-white/30 shadow-2xl">
                   <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight italic">Your Gateway to <br />Academic Excellence</h2>
              <div className="space-y-6">
                {[
                  "Centralized Course Management",
                  "Verified Certification Downloads",
                  "Academic Performance Tracking"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                       <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-black text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 pt-10 border-t border-white/10">
                 <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Registered Body</p>
                 <p className="text-lg font-black mt-2">Niti Aayog, Ministry of HRD Govt. of India</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center bg-white">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-8 text-center lg:text-left">
                <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2 inline-block">Authorized Entrance</span>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Sign In</h3>
                <div className="h-1.5 w-16 bg-primary rounded-full mb-3"></div>
                <p className="text-slate-400 font-bold text-sm">Access your encrypted institutional portal.</p>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest">Login ID / Mobile</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-focus-within:bg-primary transition-all">
                       <User className="text-slate-400 group-focus-within:text-white transition-colors w-4 h-4" />
                    </div>
                    <input
                      className="w-full pl-16 pr-6 py-3 rounded-xl border-4 border-slate-50 focus:border-primary/20 focus:bg-white transition-all outline-none bg-slate-50 font-black text-slate-900 text-sm"
                      placeholder="Username or Reg. No"
                      required
                      type="text"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest">Password</label>
                    <Link href="#" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Reset</Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-focus-within:bg-primary transition-all">
                       <Lock className="text-slate-400 group-focus-within:text-white transition-colors w-4 h-4" />
                    </div>
                    <input
                      className="w-full pl-16 pr-6 py-3 rounded-xl border-4 border-slate-50 focus:border-primary/20 focus:bg-white transition-all outline-none bg-slate-50 font-black text-slate-900 text-sm"
                      placeholder="••••••••"
                      required
                      type="password"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <input
                    className="w-5 h-5 rounded-md border-2 border-slate-200 text-primary focus:ring-primary cursor-pointer transition-all"
                    id="remember"
                    type="checkbox"
                  />
                  <label className="text-xs text-slate-500 font-bold cursor-pointer select-none" htmlFor="remember">Keep this session active</label>
                </div>
                
                <button
                  className="w-full h-12 bg-primary hover:bg-blue-700 text-white rounded-xl font-black text-base flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/30 group active:scale-[0.98] hover:-translate-y-1"
                  type="submit"
                >
                  <span>Authenticate Portal</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
                </button>
              </form>
              
              <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                <p className="text-slate-400 font-bold text-base">
                  New to Orphosys? <Link href="/registration-process" className="text-primary font-black hover:underline underline-offset-4">Apply for ID</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
