import SidebarPanelLayout from "@/components/sidebar-panel/sidebar-panel-layout";
import { ThirdwebProvider } from "thirdweb/react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider>
      <SidebarPanelLayout>
        <div className="dark:bg-[#161D26]">{children}</div>
      </SidebarPanelLayout>
    </ThirdwebProvider>
  );
}
