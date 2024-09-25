// https://api.brawlify.com/v1/events

import SearchId from "./_components/SearchId";
import Test from "./_components/Test";

export default function Home() {
  return (
    <section className="max-w-[1200px] flex flex-col items-center">
      <SearchId />
      <Test />
    </section>
  );
}
