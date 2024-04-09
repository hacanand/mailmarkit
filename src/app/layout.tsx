import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import Providers from "../shared/utils/Providers";

export const metadata: Metadata = {
  title: "mailmarkit",
  description: "mailmarkit is a simple email marketing tool.",
  // icons: {
  //   icon: "/favicon.ico",
  // }
};
// add favicon to the head
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
