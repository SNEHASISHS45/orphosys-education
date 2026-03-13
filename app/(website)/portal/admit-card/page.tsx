import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { FileText, BadgeCheck, Hash, Calendar } from "lucide-react";

export default function AdmitCardPortalPage() {
  return (
    <PortalLoginLayout
      title="Examination Admit Card"
      description="Access and download your official admit card for upcoming examinations."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtATym_rNYRGtVw-m8uN12-Y_3Hnv0GHqsHweN6ToqdWnH3GTDGY941lgl8MyfWrGPWqgpTo_j_dfES_ksABANudm5RxNddA9uv4aCQOPx3IIxExfMm2i-yDrRtFb1BiO_p8YdKzcOdWk3coimpCU-jL3HyX19TQWd7699kXUXBAHvOEAGF057BVkJopkw0LLdYlSQs7BPy3A54gJvf8OANJA3x4NSoaj-wMxtZ-3zf6fRV4igJ7FVoKiUA39POhUPwMFQf8Vc4"
      icon={FileText}
      infoTitle="Exam Entry Shell"
      infoText="Your admit card is mandatory for entry into the examination hall and online portal."
      benefits={[
        "Check exam date & venue",
        "Read important instructions",
        "Verify your registration details",
      ]}
      fields={[
        {
          label: "Registration No",
          placeholder: "e.g. REG-2024-001",
          type: "text",
          icon: BadgeCheck,
        },
        {
          label: "Enrollment No",
          placeholder: "Enter your enrollment number",
          type: "text",
          icon: Hash,
        },
      ]}
      submitText="Download Admit Card"
      footerLinkText="Missing your admit card?"
      footerLinkHref="#"
    />
  );
}
