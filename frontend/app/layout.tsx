export const metadata = {
  title: "Health Chain - Doctor",
  description: "Decentralized Health Record - Doctor Portal",
};

import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F7FB] text-slate-800">{children}</body>
    </html>
  );
}
