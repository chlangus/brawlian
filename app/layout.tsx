import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import { BrawlInfoContextProvider } from "@/context/BrawlInfoContext";
import { PlayerInfoProvider } from "@/context/PlayerInfoContext";

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
        <BrawlInfoContextProvider>
          <PlayerInfoProvider>
            <Navigation />
            {children}
          </PlayerInfoProvider>
        </BrawlInfoContextProvider>
      </body>
    </html>
  );
}
