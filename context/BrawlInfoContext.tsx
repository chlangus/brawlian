import { Brawlers } from "@/type/brawler";
import { ProfileIcons } from "@/type/icon";
import { MapCollection } from "@/type/map";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const BrawlInfoContext = createContext<{
  icon: ProfileIcons;
  setIcon: Dispatch<SetStateAction<ProfileIcons>>;
  map: MapCollection;
  setMap: Dispatch<SetStateAction<MapCollection>>;
  brawlers: Brawlers;
  setBrawlers: Dispatch<SetStateAction<Brawlers>>;
}>({
  icon: { player: {}, club: {} },
  setIcon: () => {},
  map: {},
  setMap: () => {},
  brawlers: { imageUrl: "" },
  setBrawlers: () => {},
});

export const BrawlInfoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [icon, setIcon] = useState<ProfileIcons>({ player: {}, club: {} });
  const [map, setMap] = useState<MapCollection>({});
  const [brawlers, setBrawlers] = useState<Brawlers>({ imageUrl: "" });
  return (
    <BrawlInfoContext.Provider
      value={{ icon, setIcon, map, setMap, brawlers, setBrawlers }}
    >
      {children}
    </BrawlInfoContext.Provider>
  );
};

export const useBrawlInfoContext = () => {
  return useContext(BrawlInfoContext);
};
