"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9oYH9XyhEyH7uhkyb_rzfBqbanmKaLM1aFXrxykFmV0SPKHdLaNtaP-tfTMAwbrGlZ_g-pGJSwsU5Hb6dPogV3eqh1sYVZkSZFNy_iqNkPnw3MMecGUdLIlcTv2qFD5M-E11zHAzWXyxsQTigP7tv-lBgzVXpq2mjKvD2ZeLoSRgKqLY-VVT-dBfAmDU-eddGryRCeiEfaJMrh0AWahhV6ikOVyLUMv_iD5WFYjbqa4SFS1AZ6VxzTQQ_ZclryUY7N0xddyenJU4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDiLkJ17MRIRUlZ-xzKMQvfhqPXLrjwFnDEYRQVyGGpmM0w3QGc7cd4A82NjKO8KEvWSmk1XjNC43gTJ1NOKHhng8Ve53H61QJok2-wVPWH7N2lF50DRhpKHlYmmq_WmMCSwdLnowt3Ju4iRbycBxzHOLzioRyis_Xvlx6NkZUW8ZMnUop8mgvpH6KlRPAwCQEZuciLNyUiFhpwkfdccafYrU0Z4k8K_xi7ICAOnlqlWz4GSLm_mQPEsP1rFdZpp80lCO9hQDjAO-Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6qdLuTk2Dlu0A1fAnoEYl1A_52UNzGEjsDFMFigjZo44Z67Kao4EZkB6rOO5P_887SJy91uJEtuvQrzJRiFHZvv3SB2vP0FOX_w7QknNCkc8p3BCKeaUd6dT_nMDP3TtEysF8dphNvs7HropFwNsnKaKV_C63-Xg0_c_7cwfVgae7zGOPB6RKWEk6NKPR8uh6rBe0ZJifVGi_ThJ803BMkT7fzHUfzkA7LJ2VbSQxje2VMUaYawB2xvrDxUAxmAyd5dE5jTjjlA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4at2zlEOTQgIfnsdBnX8ajBNq5rFevgv8nnU6GsJu0Fxa2RfwzbUeNeSdjVS7qyDMYoaxSCBDi2Fkfmhlo3CPZV_N5G_BR7gLK84oBbZsPIcDLiMQpURcp5X9g8timNS9ZbAgLkwhrQBuNzKN7PpxUnoVQZGWgRIS1D_7uhQdk7AZVWkaq4YJJ87DZmXgkbYF9Ocmg5oZK7X6dRyD01Re00qMAA9q4wV4eJ99d077sEwuJC_nkf89ankQeBUSzvHW_8fVACLD5Jc"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative animate-fade-in-up">
            <div className="grid grid-cols-2 gap-6 relative">
               {/* Floating Badge */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-6 rounded-3xl shadow-2xl border-8 border-slate-50 rotate-6 hidden md:block">
                  <p className="text-4xl font-black text-primary">12+</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Years of Excellence</p>
               </div>

              <div className="space-y-6">
                <div className="h-72 rounded-[40px] overflow-hidden shadow-2xl relative group">
                   <Image src={images[0]} alt="Activity" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="h-48 rounded-[40px] overflow-hidden shadow-2xl relative group">
                   <Image src={images[1]} alt="Activity" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-48 rounded-[40px] overflow-hidden shadow-2xl relative group">
                   <Image src={images[2]} alt="Activity" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="h-72 rounded-[40px] overflow-hidden shadow-2xl relative group">
                   <Image src={images[3]} alt="Activity" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-black text-sm tracking-[0.2em] uppercase mb-4 inline-block">Since 2012</span>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Empowering Future Generations Through <span className="text-gradient">Cognitive Growth</span>
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-base font-medium">
              <p>
                Orphosys Foundation is one of the best Kolkata based Child Brain Development Institution, dealing with several scientifically proven technologies of identifying child inner capabilities and polishing them to reach their heights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   "DMIT Assessment",
                   "Advanced Abacus",
                   "Vedic Mathematics",
                   "Robotics & Coding"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span className="text-slate-900 font-bold">{item}</span>
                   </div>
                 ))}
              </div>
              <p>
                We are the fastest growing brand with multiple training programs. Our vision is to reach out to every household and contribute to the nation by developing young geniuses.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">15+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Courses</p>
              </div>
              <div className="text-center border-x border-slate-200">
                <p className="text-2xl font-black text-primary">50+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Centers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-primary">100%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
