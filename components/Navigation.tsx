import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full bg-brawl-pale-blue">
      <nav className="w-full max-w-[900px] m-auto pb-2 shadow-md flex items-end justify-between">
        <Link href="/" className="text-4xl">
          Brawllian
        </Link>
        <div className="flex text-2xl gap-10">
          <Link href="/brawller">브롤러</Link>
          <Link href="/map">맵</Link>
          <Link href="/community">커뮤니티</Link>
        </div>
      </nav>
    </div>
  );
}
