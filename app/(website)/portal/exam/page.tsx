import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { ShieldCheck, BadgeCheck, Hash, Key } from "lucide-react";

export default function ExamPortalPage() {
  return (
    <PortalLoginLayout
      title="Online Examination Portal"
      description="Secure and reliable digital assessment platform. Please ensure you have a stable internet connection before starting."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtATym_rNYRGtVw-m8uN12-Y_3Hnv0GHqsHweN6ToqdWnH3GTDGY941lgl8MyfWrGPWqgpTo_j_dfES_ksABANudm5RxNddA9uv4aCQOPx3IIxExfMm2i-yDrRtFb1BiO_p8YdKzcOdWk3coimpCU-jL3HyX19TQWd7699kXUXBAHvOEAGF057BVkJopkw0LLdYlSQs7BPy3A54gJvf8OANJA3x4NSoaj-wMxtZ-3zf6fRV4igJ7FVoKiUA39POhUPwMFQf8Vc4"
      icon={ShieldCheck}
      infoTitle="Secure Access"
      infoText="Please enter your institutional credentials to access your scheduled examination."
      benefits={[
        "Single-session login enabled",
        "Proctored environment monitoring",
        "Auto-save progress feature",
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
        {
          label: "PassKey",
          placeholder: "Enter secure exam passkey",
          type: "password",
          icon: Key,
        },
      ]}
      submitText="Login to Exam"
      footerLinkText="Contact technical support"
      footerLinkHref="#"
    />
  );
}
