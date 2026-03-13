import Link from "next/link";
import { ChevronRight, Info, MapPin, Fingerprint, Image as ImageIcon, Briefcase, CheckCircle } from "lucide-react";

export default function ApplyOnlinePage() {
  return (
    <main className="flex-grow bg-slate-50">
      {/* Breadcrumbs & Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 font-medium">Apply Online</span>
        </nav>
        <div className="mb-6">
          <h2 className="text-xl font-black text-slate-900 tracking-tight mb-1">
            Apply Online
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed font-bold">
            Join our network of educational excellence. Please fill out the form below to start your journey.
          </p>
        </div>

        {/* Multi-Section Form */}
        <form className="space-y-8 pb-20">
          {/* Section 1: Basic Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Section 1: Basic Information</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Institute and owner details</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Apply For</label>
                <select className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-3 border outline-none text-xs font-bold">
                  <option>Select Option</option>
                  <option>New Franchise</option>
                  <option>Individual Teacher</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Center Status</label>
                <select className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-3 border outline-none text-xs font-bold">
                  <option>Proposed</option>
                  <option>Existing</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Center Mark As</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="Center Code/Identifier" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Institute Name</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="Name of your Institute" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Owner Name</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="Full legal name" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Mobile Number</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="+91 00000 00000" type="tel" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="example@orphosys.com" type="email" />
              </div>
            </div>
          </div>

          {/* Section 2: Address Details */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Section 2: Address Details</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Physical location of your institute</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">State</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="State" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">District</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="District" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">City</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="City/Town" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Pin Code</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="6-digit code" type="text" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Landmark</label>
                <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-9 px-4 border outline-none text-xs font-bold" placeholder="Near school, bank, etc." type="text" />
              </div>
              <div className="md:col-span-3 space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Address</label>
                <textarea className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary p-3 border outline-none text-xs font-bold" placeholder="House/Building No, Street Name..." rows={2}></textarea>
              </div>
            </div>
          </div>

          {/* Section 3: Identity & Documentation */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Fingerprint className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Section 3: Identity & Documentation</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Legal identifiers (Files 100KB - 500KB)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Aadhaar No", "Voter ID No", "PAN Card No", "Trade License No"].map((label) => (
                <div key={label} className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">{label}</label>
                  <input className="w-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-10 px-4 border outline-none text-xs font-bold" placeholder={`Enter ${label}`} type="text" />
                  <div className="relative group">
                    <input className="hidden" id={`file-${label}`} type="file" />
                    <label className="flex items-center justify-center gap-2 w-full py-2.5 border-2 border-dashed border-slate-200 rounded-lg cursor-pointer group-hover:border-primary group-hover:bg-primary/5 transition-all text-xs font-bold text-slate-500 group-hover:text-primary" htmlFor={`file-${label}`}>
                      Upload Document
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Visual Documentation */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Section 4: Visual Documentation</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Photographs of head and infrastructure</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {["Institute Head", "Office Room", "Theory Room", "Practical Room"].map((label) => (
                <div key={label} className="space-y-2 text-center">
                  <label className="text-xs font-bold text-slate-500 uppercase">{label}</label>
                  <div className="aspect-square bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center p-4 hover:border-primary transition-colors cursor-pointer group">
                     <ImageIcon className="w-6 h-6 text-slate-400 group-hover:text-primary mb-2" />
                     <span className="text-xs font-medium text-slate-600 group-hover:text-primary">Upload</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Package Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Section 5: Package Selection</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Membership or center package</p>
              </div>
            </div>
            <div className="max-w-xl">
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Select Your Package</label>
              <select className="size-full rounded-lg border-slate-300 focus:border-primary focus:ring-primary h-10 px-3 border outline-none text-xs font-bold">
                <option value="">--- Please Select Package ---</option>
                <option value="abacus">Abacus Center - ₹49,999</option>
                <option value="dmit">DMIT Center - ₹24,999</option>
                <option value="combo">DMIT And ABACUS Center - ₹64,999 / ₹74,999</option>
                <option value="school">School Registration - ₹19,999</option>
                <option value="partner">Existing Partner - ₹100</option>
              </select>
            </div>
          </div>

          {/* Section 6: Submit Button */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 bg-slate-900 rounded-xl text-white">
            <div className="flex items-start gap-3">
              <input className="mt-1 size-3.5 rounded border-slate-700 bg-slate-800 text-primary focus:ring-primary" id="terms" type="checkbox" />
              <label className="text-[11px] text-slate-300 leading-tight font-bold" htmlFor="terms">
                I hereby declare that all information provided is true and accurate. I agree to the <Link className="text-primary hover:underline" href="#">Terms & Conditions</Link>.
              </label>
            </div>
            <button className="w-full md:w-auto min-w-[180px] bg-primary hover:bg-primary/90 text-white font-black py-3 px-6 rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm" type="submit">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
