"use client";
import { NextUIProvider } from "@nextui-org/react";
//import { flushAllTraces } from "next/dist/trace";
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
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
