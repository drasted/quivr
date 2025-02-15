import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from "./supabase-provider";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { ToastProvider } from "./components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quivr - Get a Second Brain with Generative AI",
  description:
    "Quivr is your second brain in the cloud, designed to easily store and retrieve unstructured information.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body
        className={`bg-white text-black dark:bg-black dark:text-white min-h-screen w-full ${inter.className}`}
      >
        <NavBar />
        <ToastProvider>
          <SupabaseProvider session={session}>{children}</SupabaseProvider>
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}
