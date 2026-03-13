import PortalLoginLayout from "@/components/portal/PortalLoginLayout";
import { Briefcase, BadgeCheck, Hash, BellRing } from "lucide-react";

export default function JobNotificationPortalPage() {
  return (
    <PortalLoginLayout
      title="Job Notifications"
      description="Stay updated with latest career opportunities, internships, and placement drives."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7uHh9YJqA9yu29g_-N458UbdWWbgLr8L66_3mJ50ZE0odY-h5mUd3buKBWa_ouAZU48y38CfDB3tl9cpygJkYjt5FUJ1-Q72hxUDK6nEudSVZGNm4cSWzEyr_V4D_dM8HpvQtFtr2WgjkOtwCpv8ftrXPoHLj-NT8BztHplh8MeoYig5jr1Ym2ZWPZj119IJtovYw0DLVVCjy4iyr62esH4oA-XYNpekHYjvq2EL9EeeU9OD6qGqkIOt2FTYQpVtOswoeWldnzQ"
      icon={Briefcase}
      infoTitle="Career Hub"
      infoText="Placement assistance and job alerts tailored for your course profile."
      benefits={[
        "Daily career updates",
        "Placement drive alerts",
        "Resume building support",
      ]}
      fields={[
        {
          label: "Registration No",
          placeholder: "e.g. REG-2024-001",
          type: "text",
          icon: BadgeCheck,
        },
        {
          label: "Phone Number",
          placeholder: "Your registered number",
          type: "tel",
          icon: Hash,
        },
      ]}
      submitText="Access Job Portal"
      footerLinkText="Career counseling"
      footerLinkHref="#"
    />
  );
}
