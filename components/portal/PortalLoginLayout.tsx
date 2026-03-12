import Link from "next/link";
import Image from "next/image";
import { ChevronRight, LucideIcon } from "lucide-react";

interface PortalLoginLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  infoTitle: string;
  infoText: string;
  benefits: string[];
  fields: {
    label: string;
    placeholder: string;
    type: string;
    icon: LucideIcon;
  }[];
  submitText: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export default function PortalLoginLayout({
  title,
  description,
  heroImage,
  icon: Icon,
  infoTitle,
  infoText,
  benefits,
  fields,
  submitText,
  footerLinkText,
  footerLinkHref,
}: PortalLoginLayoutProps) {
  return (
    <main className="flex-grow">
      {/* Hero & Breadcrumb Section */}
      <section className="relative bg-slate-900 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <nav className="flex justify-center items-center gap-2 mb-6 uppercase tracking-[0.2em] font-black text-[10px]">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-primary">{title}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-tight">{title}</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base font-bold leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Login Container */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 mb-24 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[500px] shadow-primary/10">
          {/* Left Side: Illustration/Info */}
          <div className="md:w-5/12 bg-slate-50 p-8 md:p-10 flex flex-col justify-center border-r border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
             
            <div className="mb-8 relative z-10">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-slate-100">
                <Icon className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{infoTitle}</h3>
              <p className="text-slate-600 font-bold text-base leading-relaxed">{infoText}</p>
            </div>
            <ul className="space-y-6 relative z-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-5 text-slate-700 font-bold">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white relative">
            <div className="mb-6">
              <h2 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Portal Entry</h2>
              <p className="text-slate-500 font-bold text-sm">Direct access to your institutional records.</p>
            </div>
            <form className="space-y-6">
              {fields.map((field, idx) => {
                const FieldIcon = field.icon;
                return (
                  <div key={idx}>
                    <label className="block text-[10px] font-black text-slate-700 mb-3 uppercase tracking-widest">{field.label}</label>
                    <div className="relative group">
                      <FieldIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                      <input
                        className="w-full pl-12 pr-6 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all outline-none font-bold text-base"
                        placeholder={field.placeholder}
                        type={field.type}
                        required
                      />
                    </div>
                  </div>
                );
              })}
              <div className="pt-4">
                <button
                  className="w-full bg-primary hover:bg-blue-700 text-white font-black py-3 rounded-2xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 text-base active:scale-[0.98] hover:-translate-y-1"
                  type="submit"
                >
                  <Icon className="w-5 h-5" />
                  {submitText}
                </button>
              </div>
              {footerLinkText && footerLinkHref && (
                <p className="text-center text-sm text-slate-500 mt-8 font-bold">
                  Facing issues? <Link className="text-primary font-black hover:underline underline-offset-4" href={footerLinkHref}>{footerLinkText}</Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
