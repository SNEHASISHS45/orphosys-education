import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { BookOpen, BadgeCheck, Hash, Library } from "lucide-react";

export default function EBookPortalPage() {
  return (
    <PortalLoginLayout
      title="E-Book Download"
      description="Access our comprehensive digital library of course materials and study guides."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE"
      icon={BookOpen}
      infoTitle="Digital Library"
      infoText="Exclusively for Orphosys students. Download curriculum-aligned study materials."
      benefits={[
        "E-books for all subjects",
        "Latest syllabus updates",
        "Mobile-friendly reading",
      ]}
      fields={[
        {
          label: "Registration No",
          placeholder: "e.g. REG-2024-001",
          type: "text",
          icon: BadgeCheck,
        },
        {
          label: "Course Enrollment",
          placeholder: "Enter Enrollment No",
          type: "text",
          icon: Hash,
        },
      ]}
      submitText="Access E-Books"
      footerLinkText="Suggest a book"
      footerLinkHref="#"
    />
  );
}
