"use client";
import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
//import DashboardSidebar from "@/shared/widgets/dashboard/sidebar/dashboardSidebar";
import { usePathname } from "next/navigation";
import DashboardSidebar from "../widgets/dashboard/sidebar/dashboardSidebar";
import { Toaster } from "react-hot-toast";
import { addStripe } from "@/actions/add.stripe";


interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  const { isLoaded } = useUser();
  const { user } = useUser();
  const isStripeCustomerIdHas = async () => {
    //console.log(user);
    await addStripe({ user: user?.id });
  };

  if (!isLoaded) { return null; }
  else {
    if (user) {
      isStripeCustomerIdHas();
    }
  }
  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/success" &&
      pathname !== "/cancel" &&
      pathname !== "/sign-in" ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll ">
            <DashboardSidebar />
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
