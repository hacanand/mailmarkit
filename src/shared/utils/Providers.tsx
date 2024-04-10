"use client";
import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
 
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  const { isLoaded } = useUser();
  if (!isLoaded) return null;
  return (
    <NextUIProvider>
      {pathname !== "/dashboard" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/sign-in" ? (
    <div className="w-full flex">
                      
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  );
}
