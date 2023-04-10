import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";
import Header from "../components/Header";
import VerifiedIcon from "../icons/VerifiedIcon";
import EditIcon from "../icons/EditIcon";

type Props = {};

function Playlist({}: Props) {
  return (
    <Page>
      <Header />
      <div className="-mt-[64px]">
        <PlaylistHeader />
      </div>
      {/* track container */}
      <div>

      </div>
    </Page>
  );
}

const PlaylistHeader = () => {
  return (
    <div className="min-h-[340px] flex items-end px-8 py-6 bg-black-2">
      {/* photo */}
      <div className="min-w-[232px] h-[232px] mr-6">
        <div className="relative w-full h-full rounded bg-black-1 shadow-lg">
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="profile-photo"
              className="w-full h-full rounded object-center object-cover"
            />
          </div>
          <div className="absolute inset-0">
            <button className="w-full h-full rounded flex flex-col items-center justify-center gap-2 bg-black  opacity-0 hover:opacity-80">
              <div>
                <EditIcon />
              </div>
              <div>Choose photo</div>
            </button>
          </div>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col">
        <span> Playlist </span>

        {/* title */}

        <div className="mt-2">
          <button className="w-full">
            <h1 className="text-[96px] font-bold text-start line-clamp-3 mb-4"> Good Songs </h1>
          </button>
        </div>

        {/* ------- desc ------- */}
        <div className="line-clamp-3 text-sm opacity-75">
          ULTRA SAD PRO MAX.. includes most of the all time bests U can hit ♥️heart (of plastist if not of ur
          crush😂)and save for later to listen.. ☺ this is really good thing about this playlist
        </div>

        {/* ------- info -------- */}

        <div className="flex items-center text-sm mt-2">
          {/* user */}
          <div className="flex items-center gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-black-1"> </div>
            <Link to={""}> Sourabh Suman </Link>
          </div>
          {/* liked */}
          <span>
            <Link to={""}> • 41,345 likes </Link>
          </span>
          {/* number of song */}
          <span>
            • 369 songs,
            <span className="text-gray"> over 24 hr </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
