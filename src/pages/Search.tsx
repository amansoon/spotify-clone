import React, { useState } from "react";
import Page from "./Page";
import SearchHeader from "../components/SearchHeader";
import GenreList from "../components/GenreList";

function Search() {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <Page>
      <SearchHeader />

      <Tabs />

      {search === null && <GenreList />}
    </Page>
  );
}

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0)

  const tabs = [
    {
      id: 1,
      text: "All",
    },
    {
      id: 2,
      text: "Artists",
    },
    {
      id: 3,
      text: "Podcasts & Shows",
    },
    {
      id: 4,
      text: "Songs",
    },
    {
      id: 5,
      text: "Playlists",
    },
    {
      id: 6,
      text: "Albums",
    },
    {
      id: 7,
      text: "Genre & Moods",
    },
    {
      id: 8,
      text: "Profile",
    },
  ];

  return (
    <div className="sticky top-[64px] px-8 py-2 bg-black-1">
      <ul className="flex gap-3">
        {tabs.map(({ id, text }) => (
          <li  key={id}>
            <button className={`px-4 py-2 text-sm rounded-full transition-opacity ${currentTab === id ? 'bg-white text-black-2 hover:bg-white/90' : 'bg-black-2/90 text-white hover:bg-black-2' }`} onClick={() => setCurrentTab(id)}>
              {text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
