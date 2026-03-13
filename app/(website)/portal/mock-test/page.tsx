import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { ClipboardList, BadgeCheck, Hash, Key } from "lucide-react";

export default function MockTestPortalPage() {
  return (
    <PortalLoginLayout
      title="Online Mock Test Portal"
      description="Practice and evaluate your performance with our institutional mock test series."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtATym_rNYRGtVw-m8uN12-Y_3Hnv0GHqsHweN6ToqdWnH3GTDGY941lgl8MyfWrGPWqgpTo_j_dfES_ksABANudm5RxNddA9uv4aCQOPx3IIxExfMm2i-yDrRtFb1BiO_p8YdKzcOdWk3coimpCU-jL3HyX19TQWd7699kXUXBAHvOEAGF057BVkJopkw0LLdYlSQs7BPy3A54gJvf8OANJA3x4NSoaj-wMxtZ-3zf6fRV4igJ7FVoKiUA39POhUPwMFQf8Vc4"
      icon={ClipboardList}
      infoTitle="Practice Environment"
      infoText="Enter your credentials to access your scheduled mock tests and previous results."
      benefits={[
        "Real-time result analysis",
        "Timed practice sessions",
        "Detailed performance report",
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
      submitText="Start Mock Test"
      footerLinkText="How to take mock test?"
      footerLinkHref="#"
    />
  );
}
