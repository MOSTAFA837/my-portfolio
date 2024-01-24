import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionProvider from "@/context/active-section";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mostafa Magdy",
  description:
    "Mostafa Magdy is a full-stack developer with 4 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-200 text-gray-950 
          relative pt-28 sm:pt-36
         dark:bg-black/90 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div
          className="bg-[#8ae8ff49] absolute top-[-6rem] -z-10 right-[11rem] 
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
          dark:bg-[#946263]"
        ></div> */}

        {/* <div
          className="bg-[#ec2dac2d] absolute top-[-1rem] -z-10 left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
          md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
          dark:bg-[#676394]"
        ></div> */}

        <ThemeContextProvider>
          <ActiveSectionProvider>
            <Header />

            {children}
          </ActiveSectionProvider>

          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
