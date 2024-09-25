"use client";

import { useState } from "react";
// #9g9cpcglu
export default function SearchId() {
  const [idValue, setIdValue] = useState<string>("");

  const handleSearchIdButton = async () => {
    const response = await fetch("api/search");
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <label htmlFor="search">전적 검색</label>
      <input
        id="search"
        type="text"
        onChange={({ target }) => setIdValue(target.value)}
        value={idValue}
        className="text-black"
      />
      <button
        type="button"
        className="bg-blue-600"
        onClick={handleSearchIdButton}
      >
        검색
      </button>
    </div>
  );
}
