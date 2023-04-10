import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "./Page";
import SearchHeader from "../components/SearchHeader";
import GenreList from "../components/GenreList";
import TrackMoreIcon from "../icons/TrackMoreIcon";
import TrackLikeIcon from "../icons/TrackLikeIcon";
import TrackPauseIcon from "../icons/TrackPauseIcon";
import TrackPlayIcon from "../icons/TrackPlayIcon";
import AudioWaveIcon from "../icons/AudioWaveIcon";

function Search() {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <Page>
      <SearchHeader />

      <Tabs />

      <div className="px-8 mt-4">
        <Results />
        <Artists />
        <Albums />
        <Playlists />
        <Podcasts />
        <Episodes />
      </div>

      {search === null && <GenreList />}
    </Page>
  );
}

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

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
          <li key={id}>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-opacity ${
                currentTab === id
                  ? "bg-white text-black-2 hover:bg-white/90"
                  : "bg-black-2/90 text-white hover:bg-black-2"
              }`}
              onClick={() => setCurrentTab(id)}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Results = () => {
  return (
    <section className="grid grid-cols-6 gap-6">
      {/* top result */}
      <div className="col-span-2 h-full">
        <div>
          <h2 className="text-2xl mb-5"> Top result </h2>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-[#181818] rounded-lg">
          <div className="h-[92px] w-[92px] rounded shadow-lg shadow-black-1">
            <img
              src="data:image/jpeg;base64,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"
              alt="image"
              className="h-full object-cover rounded"
            />
          </div>
          <div>
            <Link to={""}>
              <div className="text-[32px] pb-1 line-clamp-1"> Jhoome Jo Pathaan </div>
            </Link>
            <div className="text-sm text-gray">
              <Link to={""}>Jung Koo</Link>
              <Link to={""}>BTS</Link>
              {", "}
              <Link to={""}>FIFA sound</Link>
              {", "}
              <span className="text-white px-4 py-[10px] ml-[10px] bg-black-1 rounded-full "> Song </span>
            </div>
          </div>
        </div>
      </div>
      {/* songs */}
      <div className="col-span-4 h-full flex flex-col">
        <div>
          <h2 className="text-2xl mb-5"> Songs </h2>
        </div>
        <div className="flex flex-col">
          <Track index={1} />
          <Track index={2} />
          <Track index={3} />
          <Track index={4} />
        </div>
      </div>
    </section>
  );
};

const Track = ({ index }: { index: number }) => {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="group">
      <div
        className="pr-4 pl-2 h-[56px] grid grid-cols-[4fr_minmax(120px,_1fr)] gap-4 rounded hover:bg-black-2"
        onDoubleClick={() => setPlaying(!isPlaying)}
      >
        <div className="flex items-center">
          <img
            src="data:image/jpeg;base64,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"
            className="mr-4 w-[40px] h-[40px] object-cover shrink-0 bg-red-700"
          />
          <div className="grid grid-flow-row">
            <div> City Slump </div>
            <span className="text-sm text-gray">
              <Link to={""} className="hover:underline">
                Raja Kumari
              </Link>
              {", "}
              <Link to={""} className="hover:underline">
                DIVINE
              </Link>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-self-end">
          <button className="opacity-0 group-hover:opacity-100 mr-4">
            {" "}
            <TrackLikeIcon />{" "}
          </button>
          <div className="text-sm text-gray mr-4 ml-4 grow flex justify-end">3:24</div>
          <button className="opacity-0 group-hover:opacity-100">
            {" "}
            <TrackMoreIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const Artists = () => {
  return <section></section>;
};

const Playlists = () => {
  return <section></section>;
};

const Albums = () => {
  return <section></section>;
};

const Podcasts = () => {
  return <section></section>;
};

const Episodes = () => {
  return <section></section>;
};

export default Search;
