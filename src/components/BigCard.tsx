import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../icons/PlayIcon";

type Props = {
    type: string,
    count: number,
};

function BigCard({type, count}: Props) {

  const cardGradient = type === 'like' ? "bg-gradient-to-br from-blue-800 to-blue-400" : "bg-gradient-to-br from-emerald-800 to-emerald-500"


  return (
    <div className={`group relative p-5 col-span-2 bg-red-400 rounded ${cardGradient}`}>
      {/* content of card */}
      <div className="h-full flex flex-col gap-5">
        <div className="mb-4 grow flex items-end">
          <div className="line-clamp-3">
            {/* song 1 */}
            <span>
              <span> </span>
              <span> Pritam </span>
              <span className="opacity-70"> O Bedardeya (From "Tu Jhoothi Main Makkaar") </span>
            </span>
            {/* song 2 */}
            <span>
              <span> • </span>
              <span> Alka Yagnik </span>
              <span className="opacity-70"> Agar Tum Saath Ho (From "Tamasha") </span>
            </span>
            {/* song 3 */}
            <span>
              <span> • </span>
              <span> Pritam </span>
              <span className="opacity-70"> Shayad </span>
            </span>
          </div>
        </div>
        <div>
          <Link to={""}>
            <div className="text-[32px] leading-[1.6]"> 
              {type === 'like' ? 'Liked Songs' : 'Your Episodes'}
            </div>
          </Link>
          <div className="leading-[1.6]"> 
            {count} {type === 'like' ? 'Liked songs' : 'episodes'}
          </div>
        </div>
      </div>
      {/* play button */}
      <div className="absolute right-5 bottom-2 opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all w-[48px] h-[48px]">
        <button className="relative h-full w-full transition-all hover:scale-105 flex justify-center items-center rounded-full bg-green shadow-xl">
          <span>
            <PlayIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default BigCard;
