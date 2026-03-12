"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { partners } from "@/data/partners";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function PartnerSwiper() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 inline-block">Trusted Network</span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">
            Our Distinguished <span className="text-gradient">Partners</span>
          </h2>
          <div className="w-24 h-2.5 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-20 !overflow-visible animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="h-full bg-slate-50 rounded-[40px] border-4 border-white p-10 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group shadow-xl">
                <div className="relative w-32 h-32 mb-8 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="font-black text-2xl text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {partner.name}
                </div>
                <span className="px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.15em] text-primary uppercase bg-primary/10 rounded-full">
                  {partner.role}
                </span>
                <div className="font-bold text-slate-400 text-sm italic">
                  {partner.location}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Styling for dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #0b50da !important;
          opacity: 0.2;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 6px;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
