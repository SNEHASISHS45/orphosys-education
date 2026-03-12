export interface Program {
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  features: string[];
  image?: string;
  category?: string;
  duration?: string;
  level?: string;
  price?: string;
  shortDesc?: string;
}

export const programs: Program[] = [
  {
    id: "dmit",
    title: "DMIT Test",
    desc: "A scientific assessment that reveals your child's innate potential and personality traits through biometric investigation.",
    icon: "psychology_alt",
    color: "bg-primary/10 text-primary",
    features: [
      "Multiple Intelligence Report",
      "Career Path Counseling",
      "Learning Style Analysis",
      "Behavioral Understanding",
    ],
    shortDesc: "Brain Mapping & Potential Discovery",
  },
  {
    id: "parenting",
    title: "Positive Parenting",
    desc: "Expert guidance for parents to create a nurturing environment and build a stronger, healthier bond with their children.",
    icon: "family_restroom",
    color: "bg-blue-100 text-blue-600",
    features: [
      "Digital Habit Management",
      "Emotional Intelligence",
      "Communication Skills",
      "Stress-Free Parenting",
    ],
    shortDesc: "Expert Family Guidance",
  },
  {
    id: "abacus",
    title: "Abacus",
    desc: "Empower your child with lightning-fast mental arithmetic skills and enhanced cognitive focus through traditional visualization.",
    icon: "calculate",
    color: "bg-indigo-100 text-indigo-600",
    features: [
      "Concentration & Memory",
      "Speed & Accuracy",
      "Visualization Skills",
      "Math Confidence Builder",
    ],
    shortDesc: "Mental Mathematics Mastery",
  },
  {
    id: "job",
    title: "Job Ready Course",
    desc: "A comprehensive finishing school program designed to make young professionals ready for the competitive corporate world.",
    icon: "work_history",
    color: "bg-emerald-100 text-emerald-600",
    features: [
      "Interview Preparation",
      "MS Office Mastery",
      "Communication Mastery",
      "Resume & Portfolio Building",
    ],
    shortDesc: "Professional Career Skills",
  },
  {
    id: "vedic",
    title: "Vedic Math",
    desc: "Ancient Indian mathematical techniques that enable solving complex calculations instantly without calculators.",
    icon: "functions",
    color: "bg-amber-100 text-amber-600",
    features: [
      "16 Mathematical Sutras",
      "Mental Calculation Speed",
      "Competitive Exam Hacks",
      "Error-Free Results",
    ],
    shortDesc: "Fast Calculation Techniques",
  },
  {
    id: "handwriting",
    title: "Handwriting Improvement",
    desc: "Scientific penmanship training to improve legibility, speed, and motor skill coordination in children.",
    icon: "edit_note",
    color: "bg-rose-100 text-rose-600",
    features: [
      "Posture & Grip Correction",
      "Speed Enhancement",
      "Calligraphy Basics",
      "Motor Skill Development",
    ],
    shortDesc: "Elegant Penmanship Mastery",
  },
  {
    id: "test",
    title: "Test Series Platform",
    desc: "Advanced digital examination platform with real-time analytics to help students prepare for competitive challenges.",
    icon: "quiz",
    color: "bg-violet-100 text-violet-600",
    features: [
      "Real-time Rankings",
      "Performance Analytics",
      "Unlimited Practice Sets",
      "Topic-wise Breakdown",
    ],
    shortDesc: "Advanced Practice Exams",
  },
  {
    id: "app",
    title: "Download App",
    desc: "Carry your learning world in your pocket. Access all our specialized courses, quizzes, and tracking tools on the go.",
    icon: "smartphone",
    color: "bg-primary text-white",
    features: [
      "Offline Study Mode",
      "Interactive Quizzes",
      "Progress Dashboard",
      "Instant Notifications",
    ],
    shortDesc: "Access Learning Anywhere",
  },
  {
    id: "vedic_mastery",
    title: "Vedic Math Mastery",
    desc: "Our specialized Vedic Math program focuses on advanced mental math techniques and speedy calculations for competitive excellence.",
    icon: "functions",
    color: "bg-amber-100 text-amber-600",
    features: [
      "Advanced Mental Math",
      "Competitive Edge",
      "Math phobia removal",
      "Speed Calculation Hacks",
    ],
    category: "Mathematics",
    duration: "3 Months",
    level: "Beginner to Adv",
    price: "₹1000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgXnGFbpe7CnrKgYdAX3TfCjwUH047bqOB_9g7bCCY97Fr0FHip9HxGv-GAls3ygKzgc2a-ZSAF1y7zXQsRa5SsSligI7RmJFdDewPSta89jehZkMiWQRKNkxJbM5Va95zEtaRwsP6ZnBB12ok3-vlijUShB-6z9fN__JVmEC-uJShxJQhfF1_R452Yuev4S6_ou8IrIM4sinjvS0pYT5qAddO8tA8MVE7Z6oSuruP1XClvJt2mZ0nhZDguONMQHo_NvxGWI7_7a4",
  },
  {
    id: "adv_abacus",
    title: "Advanced Abacus",
    desc: "Take mental mathematics to the next level with our advanced abacus curriculum designed for all age groups.",
    icon: "calculate",
    color: "bg-indigo-100 text-indigo-600",
    features: [
      "Complex Arithmetic",
      "Visual Memory Training",
      "Analytical Thinking",
      "Global Certification",
    ],
    category: "Mental Math",
    duration: "3 Months",
    level: "All Ages",
    price: "₹1000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChtn-hMwfWgBqZMusGH_Xy0cryDsNEsCxv9GFM1SKUWlnvqgQubLZj4Dsl1ZYZOho_j0_a7i_VNI7MJHCYWWWsuUjK48VYyR8KKwFXCxgUEfW4y7YM6Eh6Nr6rnRoQaY0t5WLn2oYOnXnfOP1DdKf-G_R1C-gsIdHMM-HsqFmB5DOFDttN5hX23kky3TR2OHM_BPp8Z4kcIQwk8cOcQVQPcmthQ0vRK_UrLpv4bxYUkFRlBP2uD2kEWg2Sb14EHD4_Rm6-pU9Hf8A",
  },
  {
    id: "chess",
    title: "Master Chess Program",
    desc: "Develop strategic thinking and problem-solving skills with our comprehensive chess training program.",
    icon: "strategy",
    color: "bg-slate-100 text-slate-900",
    features: [
      "Opening Principles",
      "Middle-game Strategy",
      "Endgame Mastery",
      "Tournament Exposure",
    ],
    category: "Strategy",
    duration: "3 Months",
    level: "Strategy Level",
    price: "₹1000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9XXnP1KtLTzfLouEVarcSXV2HBuFwX3s4VxicuDfS7QNJcGdmxYwDppkEVkploWiTmJn7WzsO9pVF8JnXkjWeVxfhgfwNToqTVuNgNyFKXYwB3pNQ4lqfUWXC6kHmq2hu_6thH-8auaL2weu19msAsKDY3LcmhS1wVcMAMicP23zFb8SQD5in8iPKZTTD8YTTlA0CUFqBQ3AkynqSGFMrTCsYQo8wtXjZ42ivO-bK_FByuHYXWWjtw3IZhM2NxqBlPwqKsgBRU_0",
  },
];
