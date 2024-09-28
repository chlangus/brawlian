import PlayerProviderContainer from "../components/PlayerProviderContainer";

export default function Home() {
  return (
    <section className="flex flex-col items-center m-auto">
      <h2 className="text-[96px] mt-[calc(100vh-90vh)]">Brawllian</h2>
      <PlayerProviderContainer />
    </section>
  );
}
