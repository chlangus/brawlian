import { BrawlInfoContextProvider } from "@/context/BrawlInfoContext";
import { PlayerInfoProvider } from "@/context/PlayerInfoContext";
import Navigation from "../Navigation";

export default function ProviderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BrawlInfoContextProvider>
      <PlayerInfoProvider>
        <Navigation />
        {children}
      </PlayerInfoProvider>
    </BrawlInfoContextProvider>
  );
}
