import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, School, ArrowRight, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           {/* Reuse a high-quality education background */}
           <div className="absolute inset-0 bg-slate-800"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <nav className="flex justify-center items-center gap-2 mb-10 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            <Link href="/" className="hover:text-primary transition-colors text-white">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-primary">Contact</span>
          </nav>
          
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight leading-none italic">
            Get In <span className="text-gradient hover:brightness-110 transition-all">Touch</span>
          </h1>
          <p className="max-w-xl mx-auto text-base text-slate-300 font-bold leading-relaxed mb-6">
            Have questions? Our team is here to help you. Connect with our counselors or visit our centers.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-white font-black">Average Response Time: 2 Hours</span>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
        <div className="bg-white rounded-[48px] p-6 md:p-10 lg:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100">
           {/* Contact Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
               {[
                 {
                   title: "Our Institution",
                   desc: "Domjur Jagadishpur Road, Jagadishpurhat, Liluah, Howrah, Pin – 711115.",
                   icon: School,
                   type: "location"
                 },
                 {
                   title: "Corporate Office",
                   desc: "25 B/1 Jheel Road, Annapurna Apartment, VivekNagar, Kolkata - 700031.",
                   icon: MapPin,
                   type: "location"
                 },
                 {
                   title: "Get In Touch",
                   desc: "contact@orphosyseducation.org\n+91 90462 40290",
                   icon: Phone,
                   type: "contact"
                 }
               ].map((item, idx) => (
                 <div key={idx} className="group p-6 bg-slate-50 rounded-3xl border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center">
                   <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                   </div>
                   <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                   <p className="text-[13px] text-slate-500 font-bold leading-relaxed whitespace-pre-line">
                     {item.desc}
                   </p>
                 </div>
               ))}
             </div>

           {/* Form & Map Split */}
           <div className="grid lg:grid-cols-2 gap-20 items-stretch">
             <div className="animate-fade-in-up">
                <div className="mb-12">
                   <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 inline-block">Direct Inquiry</span>
                   <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Send Us a <span className="text-primary italic">Message</span></h2>
                </div>
                <ContactForm />
             </div>
             
             <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-[48px] overflow-hidden aspect-[4/5] lg:aspect-auto flex-grow shadow-2xl border-[12px] border-slate-50 group min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117953.53027782493!2d88.22149479726558!3d22.50238890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02734b6203728b%3A0x1d67b16e5a533821!2sOrphosys%20Education!5e0!3m2!1sen!2sin!4v1773231157855!5m2!1sen!2sin"
                    className="w-full h-full border-0 absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="bg-slate-900 p-8 rounded-3xl border-4 border-slate-800 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Clock className="w-24 h-24 text-primary" />
                  </div>
                  <h4 className="text-lg font-black text-white flex items-center gap-3 mb-4 relative z-10">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h4>
                  <div className="space-y-3 text-slate-400 font-bold text-sm relative z-10">
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span>Mon - Sat</span>
                      <span className="text-white font-black">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Sunday</span>
                      <span className="font-black">Closed</span>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="pb-24 px-4">
         <div className="max-w-4xl mx-auto bg-primary rounded-[48px] p-8 lg:p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">Prefer a Quick Call?</h2>
            <p className="text-slate-100 font-bold text-lg mb-8 max-w-xl mx-auto leading-relaxed">Our support team is just a ring away. Call us directly for immediate assistance.</p>
            <a href="tel:+919046240290" className="inline-flex items-center gap-3 bg-white text-primary px-8 py-3 rounded-xl font-black text-xl hover:scale-105 transition-all shadow-xl">
               Call +91 90462 40290
            </a>
         </div>
      </section>
    </main>
  );
}
