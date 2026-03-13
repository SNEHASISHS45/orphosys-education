import Image from "next/image";

interface TeamGridProps {
  team?: any[];
}

export default function TeamGrid({ team = [] }: TeamGridProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight uppercase">Our Team</h2>
        <p className="text-slate-500 max-w-xl mx-auto text-xs font-bold uppercase tracking-widest">
          The dedicated professionals behind Orphosys Education.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all group"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-3 overflow-hidden border-2 border-transparent group-hover:border-primary transition-all relative">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">person</span>
                </div>
              )}
            </div>
            <h3 className="font-black text-slate-800 text-center text-sm tracking-tight">{member.name}</h3>
            <p className="text-[9px] text-primary font-black text-center mt-1.5 uppercase tracking-widest leading-none">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
