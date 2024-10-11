import SearchId from "@/components/SearchId";
import PlayerInfo from "@/components/PlayerInfo";
import PlayerTabContainer from "@/components/PlayerTabs/PlayerTabContainer";

export default function Home() {
  return (
    <section className="flex flex-col items-center m-auto">
      <h2 className="text-[96px] mt-[5vh]">Brawlian</h2>
        <SearchId />
        <PlayerInfo />
        <PlayerTabContainer />
    </section>
  );
}
