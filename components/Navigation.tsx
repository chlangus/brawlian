"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <div className="sticky w-full bg-brawl-pale-blue top-0 z-10 opacity-80">
      <nav className="w-full max-w-[900px] m-auto shadow-md flex items-center">
        <Link href="/" className="text-4xl pb-2 px-2">
          Brawllian
        </Link>
        <div className="flex text-2xl">
          <Link
            href="/brawller"
            className={`${
              path === "/brawller" ? "bg-blue-300" : ""
            } hover:bg-blue-400 p-2`}
          >
            브롤러
          </Link>
          <Link
            href="/map"
            className={`${
              path === "/map" ? "bg-blue-300" : ""
            } hover:bg-blue-400 p-2`}
          >
            맵
          </Link>
          <Link
            href="/community"
            className={`${
              path === "/community" ? "bg-blue-300" : ""
            } hover:bg-blue-400 p-2`}
          >
            커뮤니티
          </Link>
        </div>
      </nav>
    </div>
  );
}
