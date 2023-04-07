import React from "react";
import Card from "../components/Card";
import { CardType } from "../types";
import BigCard from "../components/BigCard";
import { count } from "console";

function Playlists() {
  return (
    <section className="px-8">
      <List />
    </section>
  );
}

const List = () => {
  return (
    <div className="">
      {/* list header */}
      <div className="my-4">
        <h1 className="text-2xl leading-normal"> Playlists </h1>
        <div></div>
      </div>
      {/* list content */}
      <div className="grid grid-cols-5 gap-6">
        <BigCard type="like" count={3} />
        <Card type={CardType.Playlist} data={{ name: "Sad Song", owner: "Spotify" }} />
        <Card type={CardType.Playlist} data={{ name: "My Playlist #13", owner: "Aman Ghanghoriya" }} />
        <Card type={CardType.Playlist} data={{ name: "Kaushiki Singh", owner: "Aman Ghanghoriya" }} />
        <Card type={CardType.Playlist} data={{ name: "Shoothing relax song for study", owner: "Ritik Jatav" }} />
        <Card type={CardType.Playlist} data={{ name: "My Playlist #4", owner: "Aman Ghanghoriya" }} />
      </div>
    </div>
  );
};

export default Playlists;
