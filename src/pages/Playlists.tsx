import React from "react";
import Card from "../components/Card";
import { CardType } from "../types";


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
        <Card type={CardType.Playlist} data={{ name: "Arjit Singh", owner: "" }} />
        <Card type={CardType.Playlist} data={{ name: "Jubin Nautiyal" }} />
        <Card type={CardType.Playlist} data={{ name: "Lata Mangeskar" }} />
        <Card type={CardType.Playlist} data={{ name: "Pritam Singh" }} />
        <Card type={CardType.Playlist} data={{ name: "Dhanvi Bhanushali" }} />
        <Card type={CardType.Playlist} data={{ name: "Arjit Singh" }} />
      </div>
    </div>
  );
};

export default Playlists;
