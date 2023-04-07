import React from "react";
import Page from "./Page";
import Header from "../components/Header";
import EditIcon from "../icons/EditIcon";
import { Link } from "react-router-dom";

type Props = {};

function User({}: Props) {
  return (
    <Page>
      <Header />

      <Profile />
      <TopArtists />
      <TopTracks />
      <Following />
    </Page>
  );
}

const Profile = () => {
  return (
    <div className="flex items-end px-[32px] py-[32px] bg-black-2">
      {/* photo */}
      <div className="w-[232px] min-w-[232px] h-[232px] mr-6">
        <div className="relative w-full h-full rounded-full bg-black-1 shadow-lg">
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="profile-photo"
              className="w-full h-full object-center object-cover rounded-full"
            />
          </div>
          <div className="absolute inset-0">
            <button className="w-full h-full rounded-full flex flex-col items-center justify-center gap-2 bg-black  opacity-0 hover:opacity-80">
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
        <span> Profile </span>
        <div className="mt-2">
          <button className="w-full">
            <h1 className="text-[96px] font-bold text-start line-clamp-3 mb-4"> Aman Ghanghoriy</h1>
          </button>
        </div>
        <div className="text-sm mt-2">
          <span> 17 Public Playlists </span>
          <span className="inline-block mx-1"> •</span>
          <span>
            <Link to={""}> 7 Following </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const TopArtists = () => {
  return <div></div>;
};

const TopTracks = () => {
  return <div></div>;
};

const Following = () => {
  return <div></div>;
};

export default User;
