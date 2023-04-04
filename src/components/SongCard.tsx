import React from "react";
import PlayIcon from "../icons/PlayIcon";

function SongCard() {
  return (
    <div className="min-h-[250px] bg-[#181818] p-4 rounded-[6px] cursor-pointer">
      {/* card header */}
      <div className="relative mb-4 shadow-xl">
        {/* card image  */}
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-full h-full rounded  aspect-square object-cover"
          />
        </div>
        {/* card play icon */}
        <div className="absolute right-2 bottom-2 w-[48px] h-[48px]"> 
           <button className="relative h-full w-full transition-all hover:scale-105 flex justify-center items-center rounded-full bg-green shadow-xl">
              <span>
                <PlayIcon />
              </span>
           </button>
        </div>
      </div>
      {/* card content */}
      <div>
        <a href="" className="block pb-1">
          Pathaan
        </a>
        <div className=" text-gray">
          <a href="" className="text-sm leading-5">
            {" "}
            Arjit Singh
          </a>
          {","}
          <a href="" className="text-sm leading-5">
            {" "}
            Sachit Balhotra
          </a>
          {","}
          <a href="" className="text-sm leading-5">
            {" "}
            Mukesh Singh
          </a>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
