"use client";

import Link from "next/link";
import { GraduationCap, Briefcase, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white pt-8 pb-32 overflow-hidden">
      {/* Background Gradients for Wow Factor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center px-5 py-2 mb-8 text-xs font-black tracking-widest uppercase text-white bg-primary rounded-full shadow-xl shadow-primary/20">
              <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
              Nurturing Young Minds
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              Welcome To <br />
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-600 to-blue-400 italic">
                Orphosys
              </span>{" "}
              Foundation
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl font-medium">
              The Leading Child Brain Development Institute empowering young
              minds through specialized programs and innovative learning
              techniques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="px-8 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-base group"
              >
                <GraduationCap className="w-5 h-5 transition-transform group-hover:rotate-12" />
                Explore Courses
              </Link>
              <Link
                href="/affiliation"
                className="px-8 py-3.5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-primary hover:text-primary transition-all text-base flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5 text-primary" />
                Franchisee
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm relative">
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-slate-900">5,000+</span>
                  <span className="text-primary font-black">â˜…â˜…â˜…â˜…â˜…</span>
                </div>
                <p className="text-xs font-bold text-slate-500">Trusted by students nationwide</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50 rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_ty9X06f1-dSYsHps6uJouN3HKA26kP28wVxfyMPJtxvGcO9ZoXB6ZafWDT82_aQZjwGQ-We3CopxzSsf64UaQj169k4p6l2S2wPTaIjBwdeD3nsqCi-0D6r0t5zHPXut3oabxksS8lF9EQUJnmxbDYaXFg_QPbjw6k-edcs6_3Ov69bLwCu8_t1-V8gXnaGCseQ-zqdvXOmaNGZd3yzVaRT7Qa7P93BWXlvjeR0jU9sBogb4Z6rFoNDOWWuq1CmxFl2QrkUFO0"
                alt="Students learning"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">ISO 9001</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Certified Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
