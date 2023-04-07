import React from "react";
import Page from "./Page";
import CollectionHeader from "../components/CollectionHeader";
import Card from "../components/Card";
import { CardType } from "../types";
type Props = {};

function Albums({}: Props) {
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
        <h1 className="text-2xl leading-normal"> Albums </h1>
        <div></div>
      </div>
      {/* list content */}
      <div className="grid grid-cols-5 gap-6">
        <Card type={CardType.Album} data={{ name: "Teri Aankhon", artists: [{name: 'Aman Ghanghorriya', url: ''}, {name: 'Ritik', url: ''}, {name: 'Arjit Singh Yadav is good Person', url: ''}] }} />
        <Card type={CardType.Album} data={{ name: "Human After All", artists: [{name: 'Daft Pung', url: ''}] }} />
        <Card type={CardType.Album} data={{ name: "Discovery", artists: [{name: 'Arjit Singh', url: ''}] }} />
        <Card type={CardType.Album} data={{ name: "TRON: Legacy Reconfigured", artists: [{name: 'King', url: ''}, {name: 'Arjit Singh', url: ''}] }} />
        <Card type={CardType.Album} data={{ name: "Champagne Talk", artists: [{name: 'King', url: ''}] }} />
      </div>
    </div>
  );
};

export default Albums;
