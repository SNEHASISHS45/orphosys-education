"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ChevronRight, Command } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AdminLoginPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Automatically redirect if already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const hasAdminRole = user.publicMetadata?.role === "ADMIN" || user.publicMetadata?.role === "SUPER_ADMIN";
      if (hasAdminRole) {
        router.push("/admin");
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  // Show redirecting state if already authorized
  const hasAdminRole = user?.publicMetadata?.role === "ADMIN" || user?.publicMetadata?.role === "SUPER_ADMIN";
  if (isLoaded && isSignedIn && hasAdminRole) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="size-16 border-4 border-slate-200 border-t-primary rounded-full animate-spin mb-6"></div>
        <h2 className="text-slate-900 font-black tracking-tight text-xl mb-2">Redirecting to Dashboard</h2>
        <p className="text-slate-500 font-medium text-sm">Validating your administrative access...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center size-16 bg-primary rounded-2xl shadow-xl shadow-primary/20 mb-6 text-white text-3xl font-black">
            <Command className="size-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Admin Portal</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
            Secure Infrastructure Gateway
          </p>
        </div>

        {/* Clerk SignIn Component Wrapped in our styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-white rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100 p-0 overflow-hidden",
                headerTitle: "text-slate-900 font-black tracking-tight",
                headerSubtitle: "text-slate-500 font-medium",
                formButtonPrimary: "bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl py-3 border-none shadow-xl transition-all",
                formFieldInput: "bg-slate-50/50 border-2 border-slate-100 rounded-2xl px-4 py-3 focus:bg-white focus:border-primary transition-all",
                footerActionText: "text-slate-500 font-medium",
                footerActionLink: "text-primary font-bold hover:text-blue-700",
                identityPreviewText: "text-slate-700 font-bold",
                identityPreviewEditButtonIcon: "text-primary",
                formResendCodeLink: "text-primary font-bold",
                dividerLine: "bg-slate-100",
                dividerText: "text-slate-400 font-black",
                socialButtonsBlockButton: "bg-white border-2 border-slate-100 rounded-2xl py-2.5 hover:bg-slate-50 transition-all font-bold text-slate-700",
                socialButtonsBlockButtonText: "font-bold"
              }
            }}
            routing="hash"
          />
        </motion.div>

        {/* Diagnostic Shield - Only shows if there's a problem */}
        {isSignedIn && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-6 bg-amber-50 border border-amber-100 rounded-[24px] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-2 bg-amber-500 rounded-full animate-pulse"></div>
              <h3 className="text-[11px] font-black text-amber-800 uppercase tracking-widest">Diagnostic Shield</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-amber-700/60 uppercase">Session Status:</span>
                <span className="text-emerald-600 uppercase">Authenticated</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-amber-700/60 uppercase">Assigned Role:</span>
                <span className={user?.publicMetadata?.role ? "text-emerald-600 uppercase" : "text-amber-600 uppercase"}>
                  {user?.publicMetadata?.role ? (user.publicMetadata.role as string) : "No Role Detected"}
                </span>
              </div>
              {!user?.publicMetadata?.role && (
                <p className="text-[9px] text-amber-700/80 leading-relaxed font-medium mt-4 bg-white/50 p-3 rounded-xl border border-amber-200/50">
                  <span className="font-black text-amber-900">NOTE:</span> Your account is signed in but doesn't have an admin role. Please refresh the page while staying on the dashboard to trigger auto-assignment.
                </p>
              )}
            </div>
          </motion.div>
        )}

        <div className="mt-10 text-center">
          <Link 
            href="/" 
            className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors inline-flex items-center gap-2 group"
          >
            Back to Public Site
            <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-12 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
          Powered by Orphosys Foundation OS v2.0
        </p>
      </div>
    </div>
  );
}
