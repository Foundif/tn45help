import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <FloatingActions />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
