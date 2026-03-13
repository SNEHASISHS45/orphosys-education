import Link from "next/link";
import { ChevronRight, Verified, Landmark, Badge, ExternalLink } from "lucide-react";

export default function AffiliationPage() {
  return (
    <main className="flex-1">
      {/* Breadcrumbs & Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 mb-6">
          <Link className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">Affiliation</span>
        </nav>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight italic leading-tight">
            Our <span className="text-primary">Affiliations</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed font-bold">
            Validated excellence through official certifications and recognized educational standards.
          </p>
        </div>
      </div>

      {/* Main Certifications */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ISO Certificate */}
          <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full bg-slate-50 aspect-[3/4] rounded-lg overflow-hidden relative flex items-center justify-center border border-slate-100">
              <div className="absolute inset-0 bg-primary/5"></div>
              <Verified className="w-12 h-12 text-primary/20" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-primary/40">
                  Official Document
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 text-base font-black mb-1.5 uppercase tracking-wide">ISO CERTIFICATE</h3>
              <p className="text-slate-600 text-xs font-bold leading-relaxed">
                Certified Quality Management System ensuring international standards.
              </p>
            </div>
            <button className="mt-auto text-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
              View Details <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Certificate of Incorporation */}
          <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full bg-slate-50 aspect-[3/4] rounded-lg overflow-hidden relative flex items-center justify-center border border-slate-100">
              <div className="absolute inset-0 bg-primary/5"></div>
              <Landmark className="w-12 h-12 text-primary/20" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-primary/40">
                  Government Registered
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 text-base font-black mb-1.5 uppercase tracking-wide">INC. CERTIFICATE</h3>
              <p className="text-slate-600 text-xs font-bold leading-relaxed">
                Legally registered government entity under the Companies Act.
              </p>
            </div>
            <button className="mt-auto text-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
              View Details <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MSME Certificate */}
          <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full bg-slate-50 aspect-[3/4] rounded-lg overflow-hidden relative flex items-center justify-center border border-slate-100">
              <div className="absolute inset-0 bg-primary/5"></div>
              <Badge className="w-12 h-12 text-primary/20" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-primary/40">
                  Micro Enterprise
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 text-base font-black mb-1.5 uppercase tracking-wide">MSME CERTIFICATE</h3>
              <p className="text-slate-600 text-xs font-bold leading-relaxed">
                Recognized by the Ministry of MSME, supporting local growth.
              </p>
            </div>
            <button className="mt-auto text-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
              View Details <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Partners/Affiliations Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-slate-50 border-t border-slate-100">
        <div className="text-center mb-10">
          <h2 className="text-slate-900 text-2xl font-black tracking-tight mb-3">Our Affiliations</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {["Ichhepuran", "foryou", "Royal Lives", "EduGlobal"].map((partner) => (
            <div key={partner} className="flex flex-col items-center gap-2 group opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="size-20 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">handshake</span>
              </div>
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
