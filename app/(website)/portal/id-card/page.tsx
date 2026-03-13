import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { UserCircle, BadgeCheck, Hash, Calendar } from "lucide-react";

export default function IdCardPortalPage() {
  return (
    <PortalLoginLayout
      title="Student ID Card Portal"
      description="Official portal to download your digital student identity card."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE"
      icon={UserCircle}
      infoTitle="Identity Service"
      infoText="Secure download of your Orphosys Foundation student ID card after verification."
      benefits={[
        "Print-ready PDF format",
        "Official QR code verification",
        "Lifetime digital access",
      ]}
      fields={[
        {
          label: "Registration No",
          placeholder: "e.g. REG-2024-001",
          type: "text",
          icon: BadgeCheck,
        },
        { label: "Date of Birth", placeholder: "", type: "date", icon: Calendar },
      ]}
      submitText="Download ID Card"
      footerLinkText="ID Card not showing?"
      footerLinkHref="#"
    />
  );
}
