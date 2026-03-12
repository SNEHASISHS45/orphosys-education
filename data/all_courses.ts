export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  studentCount?: string;
}

export const allCourses: Course[] = [
  // ABACUS
  {
    id: "abacus-1",
    title: "Vedic Math Essentials",
    category: "ABACUS",
    duration: "03 Month",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    studentCount: "15+ Students",
  },
  {
    id: "abacus-2",
    title: "Advanced Abacus Mastery",
    category: "ABACUS",
    duration: "06 Month",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
    studentCount: "10+ Students",
  },
  {
    id: "abacus-3",
    title: "Abacus Instructor Training",
    category: "ABACUS",
    duration: "12 Month",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    studentCount: "5+ Trainees",
  },
  {
    id: "abacus-4",
    title: "Mental Math Workshop",
    category: "ABACUS",
    duration: "One Time",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800",
    studentCount: "50+ Participants",
  },
  // DMIT
  {
    id: "dmit-1",
    title: "Standard DMIT Analysis",
    category: "DMIT",
    duration: "One Time",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    studentCount: "Individual",
  },
  {
    id: "dmit-2",
    title: "Career Counseling Pack",
    category: "DMIT",
    duration: "03 Month",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    studentCount: "5 Sessions",
  },
  // SKILLS
  {
    id: "skills-1",
    title: "Chess Master Class",
    category: "SKILLS",
    duration: "03 Month",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
    studentCount: "8+ Students",
  },
  {
    id: "skills-2",
    title: "Public Speaking Pro",
    category: "SKILLS",
    duration: "06 Month",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    studentCount: "12+ Students",
  },
  {
    id: "skills-3",
    title: "Leadership Excellence",
    category: "SKILLS",
    duration: "12 Month",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    studentCount: "10+ Students",
  },
  // WELLNESS
  {
    id: "wellness-1",
    title: "Kids Yoga Annual",
    category: "WELLNESS",
    duration: "12 Month",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    studentCount: "20+ Students",
  },
  {
    id: "wellness-2",
    title: "Mindfulness Basics",
    category: "WELLNESS",
    duration: "06 Month",
    image: "https://images.unsplash.com/photo-1545208393-21602d13b57b?auto=format&fit=crop&q=80&w=800",
    studentCount: "15+ Students",
  },
  // LANGUAGES
  {
    id: "languages-1",
    title: "Spoken English Intro",
    category: "LANGUAGES",
    duration: "03 Month",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
    studentCount: "12+ Students",
  },
  {
    id: "languages-2",
    title: "Advanced French",
    category: "LANGUAGES",
    duration: "06 Month",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    studentCount: "8+ Students",
  },
];
