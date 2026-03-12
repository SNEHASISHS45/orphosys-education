import Link from "next/link";
import { ChevronRight, Search, ArrowRight } from "lucide-react";
import Image from "next/image";

const centers = [
  {
    name: "MADHURJYA TRAINING CENTRE",
    category: "ABACUS CENTER",
    code: "OEPL439",
    director: "KOUSHIK PAUL",
    location: "12/A Vivekananda Road, Kolkata - 700006, West Bengal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-8My6lBJyRzlnGrDtA_i6DwzfVHJhQNNY6eq_35Pr8ECC_dsHcrwLZJ_dqCMELy9m8EfJIe-w1dzahyuqW_IfdZeD3sz8Q0WBSZKKJVOSeTxSmyRMz6HxPyMMBtmNfDeNcDMOfwXumQq7W4-TicoSJrXTT22x-Vv9xwxXREUoQZ6t7DgO80Rdnb5iYatsaYAoIlYyIDjqjA_Cy_-dAOrZHvQbWtbuFjXrsRcQ8bmLT9HQRdjOGf4JGgAQgJSn3d2nBHPgdtsWGHk"
  },
  {
    name: "ORPHOSYS ABACUS ARAMBAGH",
    category: "DMIT CENTER",
    code: "OEPL440",
    director: "ABID ALI MALLIK",
    location: "Main Road, Opp. Hospital, Arambagh, Hooghly - 712601",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCehjysq43HaSLV_49cRldKeYhaopUxlC9Ug66xXslU1dMKP7gqwitIGbxuTTIw64r1gXpp8QuBXsUojG_6xR4YjOTQXH546TJ3XOpgMVYoX7A3jJQurHEzRJc7jRR80amFNZzOZlZaJMsANup1Qr4kGt_3QcoHtVty0fiTEpkJPkUgQ4KPLR5Z0sc6-6FQ1Do9NczJpWSzFn7OHHIRnpfXdQNQdm0TFtP-M40kSjw1dgGrxVsIGVCOWTGQhinWZQiXGPhtHV5V-Sk"
  },
  {
    name: "SUCCESS LEARNING HUB",
    category: "ABACUS CENTER",
    code: "OEPL445",
    director: "SAYANTANI DAS",
    location: "Station Road, Howrah Maidan, Howrah - 711101",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVE7urvsjbWlkXdkEjCtWMw4eKwkDMU86dhlBVuWhC6C44H5PSN77MJFNtJJtYpdidCr71OYk8KmVqEv2ElKODUlvQxaVwwpIP8TGfhsaUkufTreS26A8cuWKNQLM3zA4BiEEQTLtqly7cHdUzm_pz1zNNPzn8K3uRBPQ8_MQIuMrSw-oRCeW7rllLj4poeLIA0hNwKJvkCF5cMml5PIsK9RkLwa_K-7bOkfLEJb520uug-vGKleEuE2FPNOY38K-2Q7QYyiCNnkk"
  }
];

export default function CentersPage() {
  return (
    <main>
      {/* Hero & Breadcrumb */}
      <div className="bg-white py-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900">Authorized Centers</span>
          </nav>
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-2 tracking-tight italic">Authorized <span className="text-primary not-italic">Centers</span></h2>
          <p className="text-slate-600 max-w-xl text-sm font-bold">Connect with our verified educational partners across India.</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-xl shadow-xl p-5 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Select State</label>
              <select className="rounded-lg border-slate-200 focus:ring-primary focus:border-primary py-2 px-3 outline-none border text-xs font-bold">
                <option>West Bengal</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Delhi</option>
                <option>Tamil Nadu</option>
                <option>Uttar Pradesh</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Select District</label>
              <select className="rounded-lg border-slate-200 focus:ring-primary focus:border-primary py-2 px-3 outline-none border text-xs font-bold">
                <option>All Districts</option>
                <option>Kolkata</option>
                <option>Howrah</option>
                <option>Hooghly</option>
                <option>North 24 Parganas</option>
                <option>South 24 Parganas</option>
                <option>Burdwan</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Select Category</label>
              <select className="rounded-lg border-slate-200 focus:ring-primary focus:border-primary py-2 px-3 outline-none border text-xs font-bold">
                <option>All Categories</option>
                <option>DMIT CENTER</option>
                <option>ABACUS CENTER</option>
                <option>VEDIC MATHS</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary text-white py-2.5 px-6 rounded-lg font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20">
                <Search className="w-4 h-4" />
                Find Centers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Center List Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Center Details</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Code</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Director</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {centers.map((center, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-200 relative">
                        <Image className="object-cover" src={center.image} alt={center.name} fill />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{center.name}</div>
                        <div className="text-xs font-bold text-primary mt-1 bg-primary/10 inline-block px-2 py-0.5 rounded uppercase">
                          {center.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="font-mono font-bold text-slate-600">{center.code}</span>
                  </td>
                  <td className="px-6 py-6 font-bold">
                    <div className="text-sm text-slate-900 uppercase">{center.director}</div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="max-w-xs">
                      <p className="text-sm text-slate-600">{center.location}</p>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="text-primary hover:text-blue-700 font-bold text-sm inline-flex items-center gap-1">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 flex items-center justify-between border-t border-slate-200">
            <span className="text-sm text-slate-500">Showing 1 to 3 of 42 centers</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white disabled:opacity-50 text-sm font-semibold">Previous</button>
              <button className="px-3 py-1 rounded bg-primary text-white font-bold text-sm">1</button>
              <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white text-sm font-semibold">2</button>
              <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white text-sm font-semibold">3</button>
              <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white text-sm font-semibold">Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
