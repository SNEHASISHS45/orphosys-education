const { PrismaClient } = require("../lib/generated/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");

const connectionString = "postgresql://neondb_owner:npg_Mz45tJObmXVv@ep-soft-moon-a18xcgeg-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const programs = [
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
    order: 1
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
    order: 2
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
    order: 3
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
    order: 4
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
    order: 5
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
    order: 6
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
    order: 7
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
    order: 8
  }
];

async function main() {
  console.log("Seeding programs...");
  for (const program of programs) {
    await prisma.program.upsert({
      where: { id: program.id },
      update: program,
      create: program,
    });
  }
  console.log("Seeding finished.");
  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);
