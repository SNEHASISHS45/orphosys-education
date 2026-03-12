import AboutHero from "@/components/about/AboutHero";
import TeamGrid from "@/components/about/TeamGrid";
import Testimonials from "@/components/about/Testimonials";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <AboutHero 
        title="About Us" 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpiszw2o83SSmMHCNMSUg7dpOzsnoSEEYKdkNe6UOWD5NrMWqi8tV3H2l16J1H2D_zF18DAeIKWYeBnLe6o43acRlMxW3p8s5ggC7bhpox0Sz3pjr-Ir2dbD-j_nXbXzscwMXA7dKNIp16tLd0QcG0OXNcDRdpd7wJPz_TDL6mPbNGTD-V0IYiBS13OZu3fMVFCPQ9QaAYFGMHE8OAWNrAQWYnPcXpD-OApwSsmCUOGh0ahzHsdpDxu_qT38hBRHwUzkxII_zskrs"
      />
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight italic">
                Welcome to <span className="text-primary not-italic uppercase tracking-tighter">Orphosys Foundation</span>
                <br />
                <span className="text-lg font-bold text-slate-400 not-italic">Leading Child Brain Development Institute</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm font-bold">
                <p>
                  Orphosys Foundation is one of the best Kolkata based Child Brain Development Institution within 10 years of experience. We have a team of highly experienced professionals dedicated to nurturing young minds.
                </p>
                <p>
                  We pledge to change the face of learning with technology and alternative learning methods. Our curriculum is designed to unlock the hidden potential of every child through scientifically proven brain development techniques.
                </p>
                <p>
                  Beyond direct education, we are offering a unique and affordable way for passionate educators to start their own profitable education business through our franchise model.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 flex-1 min-w-[140px]">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                  <div>
                    <p className="text-slate-900 font-black text-sm uppercase tracking-tight">10+ Years</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 flex-1 min-w-[140px]">
                  <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                  <div>
                    <p className="text-slate-900 font-black text-sm uppercase tracking-tight">5000+</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Students trained</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcycvGrGTiWriaz_37l70lMkMtfy2EVmMcKwPF_ReTdiqEMTikpIVcM7yACrVXRKT4vt5fvuTFKqAQRQKSEDvGxX3522jRS9j_JBFn4bIlC1J72h-0a4QGueHTu_xsb0k5wi0lFYzy-M4MTluQEeiooKhFO41YHtaaKnxI-pgEec1OVmdJbHsW-bqZnszOohA6zxYcZb0u672TWITqja9aPlEjtG_DAB04_Li4z_xiLfcmKwT_NUHWexWmsqZrZgG7heFT3wo5c_Q"
                  alt="Orphosys Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
                <p className="text-2xl font-black mb-1">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-90">Success rate in student brain development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid />
      <Testimonials />
    </main>
  );
}
