"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  LayoutDashboard, 
  Settings, 
  BookOpen, 
  Users, 
  Handshake, 
  Image as ImageIcon, 
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  Sparkles,
  Command,
  Monitor,
  ArrowRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateUserRole } from "@/app/actions/user";
import Tooltip from "@/components/admin/Tooltip";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  url: string;
  icon: string;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [settings, setSettings] = useState<any>(null);

  // Search States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Fetch Settings for Dynamic Logo
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        setSettings(data);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      }
    };
    fetchSettings();
  }, []);

  // Derived authorization state
  const role = user?.publicMetadata?.role as string | undefined;
  const hasAdminRole = role === "ADMIN" || role === "SUPER_ADMIN";
  const isAuthorized = pathname === "/admin/login" || (isSignedIn && hasAdminRole);

  // Keyboard Shortcuts (⌘K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Search Logic
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        setSearchResults(data.results || []);
        setSelectedIndex(0);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearchSelect = (url: string) => {
    router.push(url);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter" && searchResults[selectedIndex]) {
      e.preventDefault();
      handleSearchSelect(searchResults[selectedIndex].url);
    }
  };

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Authorization Monitor
  useEffect(() => {
    if (!isLoaded) return;
    if (pathname === "/admin/login") {
      setHasEntered(false);
      return;
    }
    if (!isSignedIn) {
      router.push("/admin/login");
      return;
    }
    if (role && !hasAdminRole) {
      router.push("/");
      return;
    }
    if (hasAdminRole) {
      setHasEntered(true);
    }
  }, [isLoaded, isSignedIn, role, hasAdminRole, pathname, router]);

  // Handle window resize for sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-assign SUPER_ADMIN
  useEffect(() => {
    if (isLoaded && user && !user.publicMetadata.role) {
      const timer = setTimeout(async () => {
         await updateUserRole(user.id, "SUPER_ADMIN");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, user]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isLoaded || (!isSignedIn && pathname !== "/admin/login")) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="relative">
          <div className="size-16 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <Command className="text-primary w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Global Settings", href: "/admin/settings", icon: Settings },
    { name: "Page Content", href: "/admin/sections", icon: Monitor },
    { name: "Programs", href: "/admin/programs", icon: Sparkles },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Team Members", href: "/admin/team", icon: Users },
    { name: "Partners", href: "/admin/partners", icon: Handshake },
    { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "BookOpen": return BookOpen;
      case "Users": return Users;
      case "Handshake": return Handshake;
      case "Sparkles": return Sparkles;
      default: return Search;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 flex overflow-hidden font-sans">
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.1); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>

      {/* Abacus Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="abacusPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Abacus Vertical Rods */}
              <line x1="20" y1="0" x2="20" y2="120" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="0" x2="40" y2="120" stroke="currentColor" strokeWidth="1" />
              <line x1="60" y1="0" x2="60" y2="120" stroke="currentColor" strokeWidth="1" />
              <line x1="80" y1="0" x2="80" y2="120" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="0" x2="100" y2="120" stroke="currentColor" strokeWidth="1" />
              
              {/* Horizontal Divider */}
              <rect x="0" y="35" width="120" height="4" fill="currentColor" />

              {/* Abacus Beads - Top Section */}
              <circle cx="20" cy="15" r="4" fill="currentColor" />
              <circle cx="40" cy="15" r="4" fill="currentColor" />
              <circle cx="60" cy="15" r="4" fill="currentColor" />
              <circle cx="80" cy="15" r="4" fill="currentColor" />
              <circle cx="100" cy="15" r="4" fill="currentColor" />

              {/* Abacus Beads - Bottom Section */}
              <circle cx="20" cy="55" r="4" fill="currentColor" />
              <circle cx="20" cy="70" r="4" fill="currentColor" />
              <circle cx="20" cy="85" r="4" fill="currentColor" />
              
              <circle cx="40" cy="65" r="4" fill="currentColor" />
              <circle cx="40" cy="80" r="4" fill="currentColor" />
              <circle cx="40" cy="95" r="4" fill="currentColor" />

              <circle cx="60" cy="50" r="4" fill="currentColor" />
              <circle cx="60" cy="105" r="4" fill="currentColor" />

              <circle cx="80" cy="60" r="4" fill="currentColor" />
              <circle cx="80" cy="75" r="4" fill="currentColor" />
              <circle cx="80" cy="90" r="4" fill="currentColor" />

              <circle cx="100" cy="70" r="4" fill="currentColor" />
              <circle cx="100" cy="85" r="4" fill="currentColor" />
              <circle cx="100" cy="100" r="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#abacusPattern)" />
        </svg>
      </div>

      {/* Search Overlay UI */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 md:pt-24">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100 flex flex-col"
            >
              <div className="p-6 flex items-center gap-4 border-b border-slate-100">
                <Search className={`size-5 transition-colors ${isSearching ? "text-primary animate-pulse" : "text-slate-400"}`} />
                <input 
                  ref={searchInputRef}
                  type="text"
                  placeholder="Universal command search... (type at least 2 chars)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-base font-bold text-slate-900 placeholder:text-slate-400"
                />
                <Tooltip content="Close Search" position="bottom">
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="size-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:text-slate-900 transition-all"
                  >
                    <X className="size-4" />
                  </button>
                </Tooltip>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-4 space-y-2 scrollbar-hide">
                {searchResults.length > 0 ? (
                  searchResults.map((result, idx) => {
                    const Icon = getIconComponent(result.icon);
                    return (
                      <button
                        key={`${result.type}-${result.id}`}
                        onClick={() => handleSearchSelect(result.url)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group ${
                          selectedIndex === idx ? "bg-slate-50 shadow-sm" : "hover:bg-slate-50/50"
                        }`}
                      >
                        <div className={`size-10 rounded-xl flex items-center justify-center transition-all ${
                          selectedIndex === idx ? "bg-primary text-white scale-110" : "bg-slate-100 text-slate-400"
                        }`}>
                          <Icon className="size-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-black text-slate-900 truncate uppercase tracking-tight">{result.title}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{result.subtitle}</p>
                        </div>
                        {selectedIndex === idx && (
                          <motion.div layoutId="searchArrow">
                            <ArrowRight className="size-4 text-primary" />
                          </motion.div>
                        )}
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{result.type}</span>
                      </button>
                    )
                  })
                ) : searchQuery.length >= 2 && !isSearching ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="size-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                      <Search className="size-6 text-slate-200" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">No results found for "{searchQuery}"</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Try searching for courses, team, or programs</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 space-y-6">
                    <div>
                      <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Quick Navigation</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {navItems.slice(0, 4).map((item) => (
                          <button 
                            key={item.href}
                            onClick={() => handleSearchSelect(item.href)}
                            className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-primary/30 hover:bg-white transition-all text-left"
                          >
                            <item.icon className="size-4 text-slate-400" />
                            <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-slate-900 rounded-[28px] text-white">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Pro Tip</p>
                      <p className="text-sm font-bold leading-relaxed mb-4">Use <span className="bg-white/10 px-2 py-0.5 rounded-lg border border-white/10 mx-1">↑</span> <span className="bg-white/10 px-2 py-0.5 rounded-lg border border-white/10 mx-1">↓</span> to navigate and <span className="bg-white/10 px-2 py-0.5 rounded-lg border border-white/10 mx-1 font-mono">Enter</span> to select. Press <span className="bg-white/10 px-2 py-0.5 rounded-lg border border-white/10 mx-1 font-mono">Esc</span> to close.</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`
          ${isSidebarOpen ? "w-[280px]" : "w-[90px]"} 
          fixed lg:relative inset-y-0 left-0 z-[70]
          bg-white border-r border-slate-200 
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          flex flex-col group
          ${!isSidebarOpen && isMobile ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        <div className="h-24 flex items-center px-6 border-b border-slate-100 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
           <div className="size-12 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 overflow-hidden bg-white shadow-sm border border-slate-100">
              {settings?.logoUrl ? (
                <Image 
                  src={settings.logoUrl} 
                  alt="Orphosys" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <div className="size-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                  <Command className="text-white w-6 h-6" />
                </div>
              )}
           </div>
           <div className={`ml-4 transition-all duration-300 ${isSidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}>
              <span className="block font-black text-slate-900 text-lg tracking-tighter uppercase whitespace-nowrap">Orphosys</span>
              <span className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] -mt-1">Command Center</span>
           </div>
        </div>

        <nav className="flex-grow py-8 px-4 space-y-1.5 overflow-y-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            if (item.name === "Users" && user?.publicMetadata.role !== "SUPER_ADMIN") {
              return null;
            }

            const element = (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3.5 rounded-2xl transition-all relative group/item w-full ${
                  isActive 
                    ? "bg-slate-50 text-primary shadow-[inset_0_0_20px_rgba(0,0,0,0.01)]" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50/80"
                }`}
              >
                <div className="flex items-center gap-4 w-full">
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute left-0 w-1 h-6 bg-primary rounded-full transition-transform"
                    />
                  )}
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isActive ? "text-primary scale-110" : "group-hover/item:scale-110"}`} />
                  <span className={`font-bold text-[13px] tracking-wide transition-all duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none w-0"}`}>
                    {item.name}
                  </span>
                  {isSidebarOpen && isActive && (
                    <ChevronRight className="ml-auto w-3.5 h-3.5 text-primary" />
                  )}
                </div>
              </Link>
            );

            return !isSidebarOpen ? (
              <div key={item.name} className="relative flex justify-center w-full">
                <Tooltip content={item.name} position="right" delay={0}>
                  {element}
                </Tooltip>
              </div>
            ) : element;
          })}
        </nav>

        <div className="p-6 border-t border-slate-100 bg-gradient-to-t from-slate-50/50 to-transparent">
           <div className={`flex items-center gap-3 transition-all ${isSidebarOpen ? "" : "justify-center"}`}>
              <div className="p-1 rounded-full bg-white shadow-sm border border-slate-100">
                <UserButton 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-8",
                      userButtonTrigger: "focus:shadow-none"
                    }
                  }}
                />
              </div>
              {isSidebarOpen && (
                <div className="min-w-0">
                  <p className="text-xs font-black text-slate-900 truncate">{user?.fullName}</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate">System Root</p>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-grow flex flex-col min-w-0 h-screen relative">
        <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-[40]">
           <div className="flex items-center gap-6">
              <Tooltip content={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"} position="bottom">
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="size-11 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-900 hover:border-primary/50 transition-all active:scale-95 shadow-sm"
                >
                  {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </Tooltip>
              
              <Tooltip content="Quick Command Search (⌘K)" position="bottom">
                <div 
                  onClick={() => setIsSearchOpen(true)}
                  className="hidden md:flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 w-96 hover:border-primary/40 focus-within:bg-white transition-all group cursor-pointer"
                >
                   <Search className="w-4 h-4 text-slate-400 mr-3 group-hover:text-primary transition-colors" />
                   <span className="text-[13px] font-medium text-slate-400 flex-1">Universal command search...</span>
                   <span className="text-[10px] font-black text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-100">⌘K</span>
                </div>
              </Tooltip>
           </div>

           <div className="flex items-center gap-8">
              <div className="hidden sm:flex items-center gap-2">
                 <div className="size-2 bg-emerald-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Online</span>
              </div>

              <Tooltip content="Notifications" position="bottom">
                <button className="size-11 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-primary transition-all relative">
                   <Bell className="w-5 h-5" />
                   <span className="absolute top-3 right-3 size-2 bg-primary rounded-full border-2 border-white"></span>
                </button>
              </Tooltip>

              <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
                 <div className="text-right hidden sm:block">
                    <p className="text-xs font-black text-slate-900 leading-none">{user?.fullName}</p>
                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mt-1.5">
                      {user?.publicMetadata.role ? (user.publicMetadata.role as string).replace("_", " ") : "ADMIN"}
                    </p>
                 </div>
                 <Tooltip content="Account Settings" position="bottom">
                  <div className="size-11 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                      <UserButton />
                  </div>
                 </Tooltip>
              </div>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto relative scroll-smooth bg-transparent">
          <div className="p-8 lg:p-12 max-w-[1600px] mx-auto min-h-full flex flex-col">
            {(!isAuthorized && !hasEntered) ? (
              <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                <div className="size-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verifying Authorization...</p>
              </div>
            ) : (
              <>
                {children}
                <footer className="mt-auto pt-12 pb-6 flex justify-between items-center opacity-40 border-t border-slate-100">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Orphosys Foundation OS</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">v2.0.4 r.1337</p>
                </footer>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
