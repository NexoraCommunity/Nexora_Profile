import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nexora",
  description: "Welcome to Nexora Community we are bride our member to industry",
  icons: {
    icon: "/favico.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
      >
        {children}
      </body>
    </html>
  );
}
