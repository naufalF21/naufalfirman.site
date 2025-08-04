import "~/styles/globals.css";

import { type Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { TestingNotice } from "./(root)/_components/testing-notice";

export const metadata: Metadata = {
  title: "Naufal Firman",
  description:
    "Naufal Firman is a full-stack developer with a passion for building web applications. He loves to create user-friendly interfaces and optimize performance. In his free time, he is always eager to learn and improve his skills. He lives in Pasuruan, Indonesia.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.className}`}>
      <body>
        <TestingNotice />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
