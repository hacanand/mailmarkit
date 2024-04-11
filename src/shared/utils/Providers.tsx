"use client";
import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
 //import DashboardSidebar from "@/shared/widgets/dashboard/sidebar/dashboardSidebar";
import { usePathname } from "next/navigation";
import DashboardSidebar from "../widgets/dashboard/sidebar/dashboardSidebar";

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  const { isLoaded } = useUser();
  if (!isLoaded) return null;
  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/sign-in" ? (
    <div className="w-full flex">
        <div className="w-[290px] h-screen overflow-y-scroll ">
              <DashboardSidebar/>
            </div>
            {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  );
}
