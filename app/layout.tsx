import type { Metadata } from "next";
import "./globals.css";
import ProviderContainer from "@/components/Provider/ProviderContainer";
import Navigation from "@/components/Navigation";
import BrawlerModal from "@/components/Modal/BrawlerModal";

export const metadata: Metadata = {
  title: "Brawlian",
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
        <ProviderContainer>
          <BrawlerModal />
          <Navigation />
          {children}
        </ProviderContainer>
      </body>
    </html>
  );
}
