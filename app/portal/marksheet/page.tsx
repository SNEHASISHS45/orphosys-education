import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { FileSpreadsheet, BadgeCheck, Hash, GraduationCap } from "lucide-react";

export default function MarksheetPortalPage() {
  return (
    <PortalLoginLayout
      title="Marksheet Download"
      description="Access your official academic transcripts and semester marksheets."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7uHh9YJqA9yu29g_-N458UbdWWbgLr8L66_3mJ50ZE0odY-h5mUd3buKBWa_ouAZU48y38CfDB3tl9cpygJkYjt5FUJ1-Q72hxUDK6nEudSVZGNm4cSWzEyr_V4D_dM8HpvQtFtr2WgjkOtwCpv8ftrXPoHLj-NT8BztHplh8MeoYig5jr1Ym2ZWPZj119IJtovYw0DLVVCjy4iyr62esH4oA-XYNpekHYjvq2EL9EeeU9OD6qGqkIOt2FTYQpVtOswoeWldnzQ"
      icon={FileSpreadsheet}
      infoTitle="Academic Records"
      infoText="View and download your semester-wise academic performance and final results."
      benefits={[
        "Detailed subject-wise breakdown",
        "Official institutional grading",
        "Verified digital copy",
      ]}
      fields={[
        {
          label: "Registration No",
          placeholder: "e.g. REG-2024-001",
          type: "text",
          icon: BadgeCheck,
        },
        {
          label: "Roll No / ID",
          placeholder: "Enter your roll number",
          type: "text",
          icon: Hash,
        },
      ]}
      submitText="View Marksheet"
      footerLinkText="Request physical copy"
      footerLinkHref="#"
    />
  );
}
