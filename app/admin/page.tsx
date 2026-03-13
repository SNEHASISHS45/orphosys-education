"use client";

import { useUser } from "@clerk/nextjs";
import { 
  Users, 
  BookOpen, 
  Handshake, 
  Activity,
  ArrowUpRight,
  Plus,
  TrendingUp,
  Clock,
  Zap,
  Shield,
  Layers,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Tooltip from "@/components/admin/Tooltip";

export default function AdminDashboard() {
  const { user } = useUser();
  const [stats, setStats] = useState([
    { name: "Total Courses", value: "--", icon: BookOpen, change: "+0", color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/10", key: "courses" },
    { name: "Team Members", value: "--", icon: Users, change: "0", color: "from-purple-500 to-pink-600", shadow: "shadow-purple-500/10", key: "team" },
    { name: "Partners", value: "--", icon: Handshake, change: "+0", color: "from-emerald-400 to-teal-600", shadow: "shadow-emerald-500/10", key: "partners" },
    { name: "Active Sessions", value: "156", icon: Activity, change: "+12%", color: "from-orange-400 to-red-500", shadow: "shadow-orange-500/10", key: "sessions" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        const data = await res.json();
        
        setStats(prev => prev.map(stat => {
          if (data[stat.key] !== undefined) {
            return { ...stat, value: data[stat.key].toString() };
          }
          return stat;
        }));
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const recentActivities = [
    { user: "Admin", action: "Updated Hero Section", time: "2 hours ago", type: "update" },
    { user: "System", action: "Automated Data Backup", time: "5 hours ago", type: "system" },
    { user: "Admin", action: "Added new course: Vedic Math", time: "Yesterday", type: "create" },
    { user: "Admin", action: "Modified site branding", time: "2 days ago", type: "update" },
  ];

  return (
    <div className="space-y-10 animate-fade-in relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black text-slate-900 tracking-tighter"
          >
            Terminal Overview <span className="text-primary">/</span> {user?.firstName || "Admin"}
          </motion.h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2 flex items-center gap-2">
            <span className="size-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            System Status: Nominal // All nodes responsive
          </p>
        </div>
        
        <div className="flex items-center gap-3">
           <Tooltip content="System Event Log" position="bottom">
            <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                <Clock className="size-3.5 text-slate-400" />
                History
            </button>
           </Tooltip>
           <Tooltip content="Create New Resource" position="bottom">
            <Link href="/admin/courses/new" className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all flex items-center gap-2 active:scale-95">
                <Plus className="size-3.5" />
                New Entry
            </Link>
           </Tooltip>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`}></div>
            <div className="bg-white border border-slate-100 p-7 rounded-[32px] hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative z-10 h-full">
              <div className="flex justify-between items-start mb-6">
                <div className={`size-12 rounded-2xl bg-gradient-to-br ${stat.color} p-3 flex items-center justify-center ${stat.shadow} group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-black bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </div>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.name}</p>
              <div className="flex items-baseline gap-2 mt-1">
                {loading && stat.value === "--" ? (
                  <Loader2 className="size-6 animate-spin text-slate-200" />
                ) : (
                  <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                )}
                <div className="h-4 w-1 bg-primary rounded-full opacity-30"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Analytics/Activity Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-[40px] overflow-hidden shadow-sm shadow-slate-200/50">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
               <div className="flex items-center gap-3">
                  <Zap className="size-5 text-primary" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Operation Logs</h2>
               </div>
               <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">Request Full Dump</button>
            </div>
            <div className="divide-y divide-slate-50">
               {recentActivities.map((activity, i) => (
                 <div key={i} className="px-8 py-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
                    <div className="flex items-center gap-5">
                       <div className={`size-12 rounded-2xl flex items-center justify-center font-black text-xs border border-slate-100 transition-colors ${
                         activity.type === 'system' ? 'bg-orange-50 text-orange-600' : 'bg-primary/5 text-primary'
                       }`}>
                          {activity.user.charAt(0)}
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{activity.action}</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-1">Initiated by {activity.user} • {activity.time}</p>
                       </div>
                    </div>
                    <button className="size-9 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-slate-100">
                       <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </button>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Status & Shortcuts */}
        <div className="space-y-8">
           <div className="relative group bg-primary rounded-[40px] p-8 text-white shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-white/10 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <Shield className="size-10 text-white mb-6 bg-white/10 p-2 rounded-2xl" />
                <h3 className="text-2xl font-black mb-2 tracking-tighter">System Pulse</h3>
                <p className="text-white/80 text-sm font-medium mb-10 leading-relaxed">Central orchestration for all Orphosys subsystems.</p>
                <div className="grid gap-3">
                   <Link href="/admin/sections" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center justify-between transition-all group/link border border-white/10">
                      <span className="font-bold text-sm">Deployment Mod</span>
                      <ArrowUpRight className="size-4 opacity-50 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                   </Link>
                   <Link href="/admin/settings" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center justify-between transition-all group/link border border-white/10">
                      <span className="font-bold text-sm">Core Config</span>
                      <ArrowUpRight className="size-4 opacity-50 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                   </Link>
                </div>
              </div>
           </div>

           <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                 <Layers className="size-5 text-emerald-500" />
                 <h3 className="text-lg font-black text-slate-900 tracking-tight">Node Integrity</h3>
              </div>
              <div className="space-y-6">
                 {[
                   { name: "Global Database", status: "Active" },
                   { name: "Media Assets", status: "Cloud Sync" },
                   { name: "Service Workers", status: "Active" }
                 ].map((node) => (
                   <div key={node.name} className="space-y-2">
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{node.name}</span>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{node.status}</span>
                     </div>
                     <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-emerald-500"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                     </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
