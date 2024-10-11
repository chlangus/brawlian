import type { Metadata } from "next";
import "./globals.css";
import ProviderContainer from "@/components/Provider/ProviderContainer";
import Navigation from "@/components/Navigation";
import Modal from "@/components/Modal/Modal";

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
          <Modal />
          <Navigation />
          {children}
        </ProviderContainer>
      </body>
    </html>
  );
}
