import Hero from "@/components/home/Hero";
import ProgramGrid from "@/components/home/ProgramGrid";
import AboutSection from "@/components/home/AboutSection";
import PopularCourses from "@/components/home/PopularCourses";
import InstructorSection from "@/components/home/InstructorSection";
import PartnerSwiper from "@/components/home/PartnerSwiper";
import AffiliationSection from "@/components/home/AffiliationSection";
import CollaborationSection from "@/components/home/CollaborationSection";
import { getPageSection, getCourses, getTeamMembers, getPartners } from "@/lib/data";

export default async function Home() {
  const heroContent = await getPageSection("home", "hero");
  const aboutContent = await getPageSection("home", "about");
  const courses = await getCourses();
  const team = await getTeamMembers();
  const partners = await getPartners();

  return (
    <>
      <Hero content={heroContent} />
      <ProgramGrid />
      <AboutSection content={aboutContent} />
      <PopularCourses courses={courses} />
      <InstructorSection team={team} />
      <PartnerSwiper partners={partners} />
      <AffiliationSection />
      <CollaborationSection />
      
      {/* Social Sections */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 relative inline-block">
              <span className="relative z-10">What Our Students Say</span>
              <span 
                className="absolute bottom-0 left-0 w-full h-3 bg-no-repeat bg-bottom bg-contain -z-0 translate-y-2 opacity-50"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0,8 Q50,0 100,8%22 stroke=%22%23b2c300%22 stroke-width=%224%22 fill=%22none%22 stroke-linecap=%22round%22/%3E%3C/svg%3E')" }}
              ></span>
            </h2>
            <p className="text-slate-600 text-lg">Read real reviews from our Google Business Profile</p>
          </div>
          <div className="elfsight-app-31acbb98-98d4-409e-b606-781f54e64191" data-elfsight-app-lazy></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 relative inline-block">
              <span className="relative z-10">Follow Us On Facebook</span>
              <span 
                className="absolute bottom-0 left-0 w-full h-3 bg-no-repeat bg-bottom bg-contain -z-0 translate-y-2 opacity-50"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0,8 Q50,0 100,8%22 stroke=%22%23b2c300%22 stroke-width=%224%22 fill=%22none%22 stroke-linecap=%22round%22/%3E%3C/svg%3E')" }}
              ></span>
            </h2>
            <p className="text-slate-600 text-lg">Stay updated with our latest news and events</p>
          </div>
          <div className="w-full">
            <div className="elfsight-app-90774266-a9f3-4631-a14c-bc295a3c71ca" data-elfsight-app-lazy style={{ minHeight: '600px', width: '100%' }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
