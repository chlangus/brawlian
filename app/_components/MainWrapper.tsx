"use client";
import { Provider } from "@/context/context";
import PlayerInfo from "./PlayerInfo";
import SearchId from "./SearchId";

export default function MainWrapper() {
  return (
    <Provider>
      <section>
        <SearchId />
      </section>
      <PlayerInfo />
    </Provider>
  );
}
