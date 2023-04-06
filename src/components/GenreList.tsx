import React from "react";

type Props = {};

function GenreList({}: Props) {
  return (
    <div className="px-6 mt-6">
      <section className="">
        <div className="mb-4">
          <h1 className="text-2xl text-white"> Browse all </h1>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => {
            return <GenreCard />
          })}
        </div>
      </section>
    </div>
  );
}

const GenreCard = () => {
  return (
    <a
      href=""
      className="block aspect-square bg-rose-500 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-full">
        <div className="p-4 text-2xl"> Podcasts </div>
        <img
          src="data:image/jpeg;base64,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"
          alt="genre"
          className="w-[100px] h-[100px] object-cover absolute bottom-0 right-0 rotate-[25deg] translate-x-[18%] -translate-y-[2%]"
        />
      </div>
    </a>
  );
};

export default GenreList;