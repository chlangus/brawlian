import { BrawlInfoContextProvider } from "@/context/BrawlInfoContext";
import { PlayerInfoProvider } from "@/context/PlayerInfoContext";
import { ModalContextProvider } from "@/context/ModalContext";

export default function ProviderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalContextProvider>
      <BrawlInfoContextProvider>
        <PlayerInfoProvider>
          {children}
        </PlayerInfoProvider>
      </BrawlInfoContextProvider>
    </ModalContextProvider>
  );
}
