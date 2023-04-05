import React from "react";
import Page from "./Page";
import SongCard from "../components/SongCard";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PlayIcon from "../icons/PlayIcon";
import Header from "../components/Header";
import HomeHeader from "../components/HomeHeader";
import SearchHeader from "../components/SearchHeader";

function Home() {
  return (
    <Page>

      <SearchHeader />

      <div className="flex flex-col gap-6 pt-8 px-4 lg:px-8">
        {/* wish section */}
        <section className="">
          {/* title */}
          <div className="flex items-center mb-4">
            <h1 className="text-3xl">{"Good Morning"}</h1>
          </div>
          {/* content */}
          <div className="grid grid-cols-3 gap-6 max-[1162px]:grid-cols-2">
            {/* card */}
            {[1, 2, 3, 4, 5, 5].map((item) => {
              return (
                <div className="h-[80px] max-[1162px]:h-[64px] flex rounded overflow-hidden bg-[hsla(0,0%,100%,.1)] shadow">
                  <div className="">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="dog"
                      className="h-full aspect-square object-cover"
                    />
                  </div>
                  <div className="h-full grow flex items-center px-4">
                    <div className="grow">
                      <a href="" className="">
                        {" "}
                        Imagine Dragons Mix
                      </a>
                    </div>
                    <div className="shrink-0 w-[48px] h-[48px] ml-4">
                      <button className="relative h-full w-full transition-all hover:scale-105 flex justify-center items-center rounded-full bg-green shadow-xl">
                        <span>
                          <PlayIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Section title={"Episodes for you"} />
        <Section title={"Made for Aman Ghanghoriya"} />
        <Section title={"Recently played"} />
        <Section title={"Mare of what you like"} />
        <Section title={"Your top mixes"} />
        <Section title={"Jump back in"} />
        <Section title={"India's best"} />
        <Section title={"Popular albums"} />
        <Section title={"Based on your recent listening"} />
        <Section title={"For fans of Arjit Singh"} />
        <Section title={"Recommanded for today"} />
        <Section title={"More like Arjit Singh"} />
        <Section title={"More like trending Now India"} />
        <Section title={"Charts"} />
        <Section title={"Your favorite artists"} />
        <Section title={"Recommanded radios"} />
        <Section title={"Popular artists"} />
        <Section title={"Popular radios"} />
      </div>
    </Page>
  );
}

const Section = ({ title }: { title: string }) => {
  return (
    <section className="mb-4">
      {/* section title  */}
      <div className="flex items-center mb-4">
        <div className="grow">
          <h2>
            <a href="" className="text-2xl hover:underline">
              {title}
            </a>
          </h2>
        </div>
        <a
          href=""
          className="ml-2 text-sm text-gray hover:underline decoration-[1.5px]"
        >
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
