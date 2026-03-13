import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getGlobalSettings } from "@/lib/data";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getGlobalSettings();

  return (
    <>
      <Header settings={settings} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer settings={settings} />
    </>
  );
}
