export interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  desc: string;
  icon: string;
  color: string;
  features: string[];
}

export const instructors: Instructor[] = [
  {
    id: "inst_devajyoti",
    name: "Devajyoti Das",
    role: "Business Head / Neuro Science Coach",
    image: "/assets/Expert Instructors/Devajyoti Das.png",
    desc: "Business Head and Neuro Science Life Management Coach. Devajyoti combines business leadership with scientific life management techniques.",
    icon: "psychology",
    color: "bg-primary/10 text-primary",
    features: ["Neuro Science Coach", "Business Strategy Head", "Life Management Mentor", "Team Leadership Specialist"],
  },
  {
    id: "inst_preety",
    name: "Preety Maity",
    role: "Asst. Manager (Front Office)",
    image: "/assets/Expert Instructors/Preety Maity.png",
    desc: "Asst. Manager (Front Office). Preety ensures smooth operational flow and excellent support for all our learners and visitors.",
    icon: "support_agent",
    color: "bg-blue-100 text-blue-600",
    features: ["Operational Management", "Front Office Expert", "Visitor Coordination", "Process Optimization"],
  },
  {
    id: "inst_aditya",
    name: "Aditya Kumar Yadav",
    role: "Digital Marketing Manager",
    image: "/assets/Expert Instructors/Aditya Kumar Yadav.png",
    desc: "Digital Marketing Manager. Aditya leads our digital presence and ensures Orphosys Education reaches every corner of our target audience.",
    icon: "ads_click",
    color: "bg-emerald-100 text-emerald-600",
    features: ["Digital Strategy", "Growth Marketing", "Brand Management", "Online Engagement"],
  },
  {
    id: "inst_amrita",
    name: "Amrita Pal",
    role: "Asst. Manager (Front Office)",
    image: "/assets/Expert Instructors/Amrita Pal.png",
    desc: "Asst. Manager (Front Office). Amrita is dedicated to providing friendly and efficient service to our students and parents.",
    icon: "front_loader",
    color: "bg-rose-100 text-rose-600",
    features: ["Student Support", "Administrative Excellence", "Query Resolution", "Team Coordination"],
  },
  {
    id: "inst_tapash",
    name: "Dr. Tapash Kr Sharma",
    role: "Managing Partner / Parenting Coach",
    image: "/assets/Expert Instructors/Dr. Tapash Kumar Sharma.png",
    desc: "Managing Partner, Parenting Coach, and Doctor. Dr. Sharma brings professional medical insight into his parenting coaching programs.",
    icon: "medical_services",
    color: "bg-indigo-100 text-indigo-600",
    features: ["Parenting Specialist", "Medical Background", "Strategic Leadership", "Family Wellness Mentor"],
  },
  {
    id: "inst_dipali",
    name: "Dipali Pramanik",
    role: "DMIT Counselor / Expert",
    image: "/assets/Expert Instructors/Dipali Pramanik.png",
    desc: "DMIT Counselor and Parenting Expert. Dipali specializes in biometric analysis and guiding parents through behavioral discovery.",
    icon: "fingerprint",
    color: "bg-amber-100 text-amber-600",
    features: ["DMIT Interpretation", "Parenting Specialist", "Behavioral Analysis", "Biometric Research"],
  },
  {
    id: "inst_sanhita",
    name: "Sanhita Ghosh",
    role: "Counseling Psychologist",
    image: "/assets/Expert Instructors/Sanhita Ghosh.png",
    desc: "Counseling Psychologist and Abacus Trainer. Sanhita bridges clinical psychology with cognitive developmental training.",
    icon: "psychology_alt",
    color: "bg-violet-100 text-violet-600",
    features: ["Clinical Counseling", "Abacus Training", "Cognitive Development", "Emotional Wellness"],
  },
  {
    id: "inst_priyanka",
    name: "Priyanka Dey",
    role: "Soft Skill Trainer",
    image: "/assets/Expert Instructors/Priyanka Dey.png",
    desc: "Soft Skill Trainer. Priyanka focuses on developing essential non-technical skills that prepared students for personal and professional growth.",
    icon: "groups",
    color: "bg-teal-100 text-teal-600",
    features: ["Communication Skills", "Leadership Training", "Personality Grooming", "Public Speaking"],
  },
  {
    id: "inst_piyali",
    name: "Piyali Ganguly",
    role: "Asst. Manager / Trainer",
    image: "/assets/Expert Instructors/Piyali Ganguly.png",
    desc: "Asst. Manager, Trainer, and Counselor. Piyali is a multi-talented professional dedicated to student growth and operational success.",
    icon: "diversity_1",
    color: "bg-orange-100 text-orange-600",
    features: ["Student Counseling", "Training Management", "Operations Support", "Mentorship Programs"],
  },
  {
    id: "inst_ria",
    name: "Ria Ghosh",
    role: "Operation Manager / Trainer",
    image: "/assets/Expert Instructors/Ria Ghosh.png",
    desc: "Operation Manager, Trainer, and Counselor. Ria oversees our core operations while providing expert training and counseling services.",
    icon: "settings_account_box",
    color: "bg-slate-100 text-slate-800",
    features: ["Operations Strategy", "Educational Training", "Career Counseling", "Quality Control"],
  },
];
