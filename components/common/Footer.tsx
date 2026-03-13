"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Instagram, Facebook, Twitter, Phone } from "lucide-react";

interface FooterProps {
  settings: any;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand & Addresses */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {settings?.footerLogoUrl ? (
                <Image src={settings.footerLogoUrl} alt="Orphosys" width={150} height={40} className="h-10 w-auto" />
              ) : (
                <>
                  <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[20px]">
                      psychology
                    </span>
                  </div>
                  <span className="text-xl font-black text-primary uppercase">
                    Orphosys
                  </span>
                </>
              )}
            </div>
            <div className="space-y-6">
              <div>
                <h6 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  Office Address
                </h6>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {settings?.address || `25 B/1 Jheel Road, Annapurna Apartment,\nVivekNagar, Kolkata - 700031.`}
                </p>
              </div>
              <div>
                <h6 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Support
                </h6>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {settings?.email || "contact@orphosyseducation.org"}
                </p>
                {settings?.phone && (
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    {settings.phone}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">
              Quick Links
            </h6>
            <ul className="space-y-4">
              <li>
                <Link className="text-sm text-slate-600 hover:text-primary transition-colors" href="/courses">Courses</Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-primary transition-colors" href="/affiliation">Franchise</Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-primary transition-colors" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Enquiry Form - Minimalist */}
          <div className="col-span-1 lg:col-span-2">
            <h6 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">
              Send Your Query
            </h6>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full border"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full border"
                placeholder="Email Address"
                type="email"
              />
              <div className="col-span-1 md:col-span-2">
                <select className="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full border">
                  <option>Select Enquiry Type</option>
                  <option>Franchise Enquiry</option>
                  <option>Offline Course Enquiry</option>
                  <option>Online Course Enquiry</option>
                  <option>Partnership Proposal</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2">
                <textarea
                  className="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full border"
                  placeholder="Your Message"
                  rows={3}
                ></textarea>
              </div>
              <div className="col-span-1 md:col-span-2">
                <button
                  type="button"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Orphosys Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {settings?.facebookUrl && (
              <Link className="text-slate-400 hover:text-primary transition-colors" href={settings.facebookUrl}>
                <Facebook className="w-5 h-5" />
              </Link>
            )}
            {settings?.instagramUrl && (
              <Link className="text-slate-400 hover:text-primary transition-colors" href={settings.instagramUrl}>
                <Instagram className="w-5 h-5" />
              </Link>
            )}
            {settings?.twitterUrl && (
              <Link className="text-slate-400 hover:text-primary transition-colors" href={settings.twitterUrl}>
                <Twitter className="w-5 h-5" />
              </Link>
            )}
            <Link className="text-slate-400 hover:text-primary transition-colors" href={`mailto:${settings?.email || 'contact@orphosyseducation.org'}`}>
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
