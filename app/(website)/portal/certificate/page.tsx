import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { Award, BadgeCheck, Hash, Calendar } from "lucide-react";

export default function CertificatePortalPage() {
  return (
    <PortalLoginLayout
      title="Certificate Download"
      description="Official portal to access your course completion certificates and awards."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7uHh9YJqA9yu29g_-N458UbdWWbgLr8L66_3mJ50ZE0odY-h5mUd3buKBWa_ouAZU48y38CfDB3tl9cpygJkYjt5FUJ1-Q72hxUDK6nEudSVZGNm4cSWzEyr_V4D_dM8HpvQtFtr2WgjkOtwCpv8ftrXPoHLj-NT8BztHplh8MeoYig5jr1Ym2ZWPZj119IJtovYw0DLVVCjy4iyr62esH4oA-XYNpekHYjvq2EL9EeeU9OD6qGqkIOt2FTYQpVtOswoeWldnzQ"
      icon={Award}
      infoTitle="Digital Credentials"
      infoText="Download your verified digital certificates. Recognized by government and private sectors."
      benefits={[
        "ISO certified certificates",
        "QR code for instant verification",
        "Downloadable anytime, anywhere",
      ]}
      fields={[
        {
          label: "Registration No",
          placeholder: "e.g. REG-2024-001",
          type: "text",
          icon: BadgeCheck,
        },
        {
          label: "Certificate No",
          placeholder: "Enter ID if available",
          type: "text",
          icon: Hash,
        },
      ]}
      submitText="Download Certificate"
      footerLinkText="Verify certificate authenticity"
      footerLinkHref="#"
    />
  );
}
