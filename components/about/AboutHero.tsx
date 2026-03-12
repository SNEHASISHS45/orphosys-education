import Link from "next/link";
import Image from "next/image";

interface AboutHeroProps {
  title: string;
  image: string;
}

export default function AboutHero({ title, image }: AboutHeroProps) {
  return (
    <section className="relative h-64 flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <nav className="flex mb-4 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 text-slate-500">/</span>
          <span className="text-primary">{title}</span>
        </nav>
        <h1 className="text-5xl font-black text-white tracking-tight">{title}</h1>
      </div>
    </section>
  );
}
