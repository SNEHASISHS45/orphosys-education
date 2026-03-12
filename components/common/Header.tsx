"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Download, LogIn, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link className="flex items-center" href="/">
            <Image
              className="h-16 w-auto transition-all duration-300 hover:scale-105"
              src="/assets/nav_logo.png"
              alt="Orphosys"
              width={200}
              height={64}
              priority
            />
          </Link>

          {/* Desktop Navigation - Minimalist Style */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-sm font-semibold text-primary" href="/">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1"
                href="/about"
              >
                About
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
                <div className="min-w-56 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/about">About</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/affiliation">Affiliation</Link>
                </div>
              </div>
            </div>

            {/* Franchise Dropdown */}
            <div className="relative group">
              <Link
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1"
                href="/affiliation"
              >
                Franchise
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
                <div className="min-w-72 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/affiliation-process">Affiliation Process</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/apply-online">Apply Online</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/login">Study Centre Login</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/centers">Authorized Center List</Link>
                </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="relative group">
              <Link
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1"
                href="/courses"
              >
                Courses
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
                <div className="min-w-64 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/courses">Offline Courses</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/courses/online-ready">Online Ready Courses</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/courses/online-live">Online Live Courses</Link>
                </div>
              </div>
            </div>

            {/* Gallery Dropdown */}
            <div className="relative group">
              <Link
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1"
                href="/gallery/photo"
              >
                Gallery
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
                <div className="min-w-48 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/gallery/photo">Photo</Link>
                  <Link className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/gallery/video">Video</Link>
                </div>
              </div>
            </div>

            {/* Student Dropdown */}
            <div className="relative group">
              <Link
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1"
                href="/login"
              >
                Student
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
                <div className="min-w-80 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2 max-h-[70vh] overflow-y-auto">
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/student/login">Student Registration</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/registration-process">Registration Process</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/student/login">Student Login</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/exam">Online Exam</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/mock-test">Online Mock Test</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/id-card">Student Id Card</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/admit-card">Student Admit Card</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/certificate">Certificate Download</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/marksheet">Marksheet Download</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/e-book">E-Book Download</Link>
                  <Link className="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="/portal/job-notification">Job Notification</Link>
                </div>
              </div>
            </div>

            <Link className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="/contact">
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all"
              href="/downloads"
            >
              <Download className="w-5 h-5" />
              Download
            </Link>
            <Link
              className="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              href="/login"
            >
              Login
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-4 shadow-xl">
           <Link className="block text-sm font-semibold text-primary" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
           <Link className="block text-sm font-semibold text-slate-600" href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
           <Link className="block text-sm font-semibold text-slate-600" href="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
           <Link className="block text-sm font-semibold text-slate-600" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
           <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
             <Link className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 rounded-lg" href="/downloads">
                <Download className="w-4 h-4" /> Download
             </Link>
             <Link className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg" href="/login">
                <LogIn className="w-4 h-4" /> Login
             </Link>
           </div>
        </div>
      )}
    </header>
  );
}
