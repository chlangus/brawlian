import type { Metadata } from "next";
import "./globals.css";
import ProviderContainer from "@/components/Provider/ProviderContainer";

export const metadata: Metadata = {
  title: "Brawllian",
  description: "For brawlstars users.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderContainer>{children}</ProviderContainer>
      </body>
    </html>
  );
}
