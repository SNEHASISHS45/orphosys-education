import Link from "next/link";
import Image from "next/image";
import { ChevronRight, User, Phone, Mail, Calendar, LogIn } from "lucide-react";

export default function StudentLoginPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-xs font-black uppercase tracking-wider">
        <Link href="/" className="text-slate-500 hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4 text-slate-400" />
        <span className="text-primary">Student Login</span>
      </nav>

      {/* Registration Content */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 min-h-[650px]">
          {/* Left Side: Visual/Context */}
          <div className="md:w-5/12 bg-slate-900 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
             
            <div className="w-full h-48 relative rounded-[32px] overflow-hidden mb-8 shadow-2xl border-4 border-white/10 group">
               <Image
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF_8xZ9CZ2kaKlYy8T8aDC-XVjCZ06_0JwfJc7jNZjdWe5N-Q7Sks1Q1zpb1lnII5ayvaCldaYckzHO9AIk7gPy5GBPWUar1Vk_A7ex6_VAkmdOzg5Z4Lt1zRTdwFYcpTn8LJPjVisiT5tV1BS8WgHfkE8vD72t8FzpY2G-IpQXQMmu9PezqiGV6ky0GTD0A-vXx8yJlDAfVU4tP7JhX0rOVRa536kfUpRTQa6W1NI8xjxpMgZSdxKuEmWszXs8Rt7CZsrqRUMSI0"
                 alt="Students studying"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <h1 className="text-2xl font-black text-white mb-2 relative z-10 tracking-tight">Welcome Back!</h1>
            <p className="text-slate-400 font-bold text-sm leading-relaxed relative z-10">
              Access your courses, track your progress, and join our learning community.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-7/12 p-6 md:p-10 flex flex-col justify-center bg-white">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Student Portal</h2>
              <p className="text-slate-500 font-bold text-sm">Enter your details to access your account or register as a new student.</p>
            </div>
            <form className="space-y-4">
              <div className="space-y-3">
                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                  <input
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50/30 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-base"
                    placeholder="Enter your full name"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Mobile</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50/30 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-base"
                      placeholder="Number"
                      type="tel"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50/30 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-base"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest">Date of Birth</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                  <input
                    className="w-full pl-12 pr-12 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50/30 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-base appearance-none cursor-pointer"
                    type="date"
                    required
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-xl font-black text-lg flex items-center justify-center gap-4 transition-all shadow-2xl shadow-primary/30 group active:scale-[0.98] hover:-translate-y-1"
                  type="submit"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login / Register</span>
                </button>
              </div>
              <p className="text-center text-sm text-slate-500 font-bold mt-8">
                By continuing, you agree to our <Link href="#" className="text-primary hover:underline underline-offset-4">Terms of Service</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
