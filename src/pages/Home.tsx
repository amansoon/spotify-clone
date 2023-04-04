import React from "react";
import Page from "./Page";
import SongCard from "../components/SongCard";

function Home() {
  return (
    <Page>
      <div className="flex flex-col gap-6 pt-8 px-4 lg:px-8">
         <Section />
         <Section />
         <Section />
      </div>
    </Page>
  );
}

const Section = () => {
  return (
    <section className="mb-4">
      {/* section title  */}
      <div className="flex items-center mb-4">
        <div className="grow">
          <h2>
            <a href="" className="text-2xl hover:underline"> Episodes for you </a>
          </h2>
        </div>
        <a href="" className="ml-2 text-sm text-gray hover:underline decoration-[1.5px]">
          Show all
        </a>
      </div>

      {/* section content */}
      <div className="grid grid-cols-5 gap-6">
         <SongCard />
         <SongCard />
         <SongCard />
         <SongCard />
         <SongCard />
      </div>

    </section>
  );
};

export default Home;
