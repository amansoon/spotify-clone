import React from "react";
import Page from "./Page";
import CollectionHeader from "../components/CollectionHeader";
import Card from "../components/Card";
import { CardType } from "../types";
import BigCard from "../components/BigCard";
type Props = {};

function Podcasts({}: Props) {
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
        <h1 className="text-2xl leading-normal"> Podcasts </h1>
        <div></div>
      </div>
      {/* list content */}
      <div className="grid grid-cols-5 gap-6">
        <BigCard type="episode" count={3} />
        <Card type={CardType.Podcast} data={{ name: "Sandeep Maheshwari", publisher: 'Audible' }} />
        <Card type={CardType.Podcast} data={{ name: "Neend - Bedtime stories", publisher: 'Neend' }} />
        <Card type={CardType.Podcast} data={{ name: "The Ranveer Show", publisher: 'BeerBiceps aka Ranveer Allahbadia' }} />
        <Card type={CardType.Podcast} data={{ name: "Maha Bharat with Dhruv Rathee", publisher: 'Spotify Studio' }} />
        <Card type={CardType.Podcast} data={{ name: "Dhruv Rathee", publisher: 'Dhruv Rathee' }} />
      </div>
    </div>
  );
};

export default Podcasts;
