import React from "react";
import Bookmark from "../icons/Bookmark";
import Like from "../icons/Like";
import Plus from "../icons/Plus";
import LibraryIcon from "../icons/LibraryIcon";
import LogoIcon from "../icons/LogoIcon";

import HomeIcon from "../icons/HomeIcon";
import HomeFillIcon from "../icons/HomeFillIcon";

import SearchIcon from "../icons/SearchIcon";
import SearchFillIcon from "../icons/SearchFillIcon";
import LibraryFillIcon from "../icons/LibraryFillIcon";

type Props = {};

function Sidebar({}: Props) {
  const myplaylists = [
    {
      id: 1,
      text: "Kaushiki",
    },
    {
      id: 1,
      text: "# Playlist1",
    },
    {
      id: 1,
      text: "Playlist2",
    },
  ];

  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-full bg-black">
      <div className="pt-6">
        <div className="w-full">
          <a href="/" className="block px-6 mb-6">
            <LogoIcon />
          </a>
        </div>

        <div className="flex flex-col p">
          <ul>
            <SidebarItemPrimary icon={<HomeFillIcon />} text={"Home"} />
            <SidebarItemPrimary icon={<SearchFillIcon />} text={"Search"} />
            <SidebarItemPrimary icon={<LibraryIcon />} text={"Your Library"} />
          </ul>
        </div>

        <div className="flex flex-col mt-6">
          <SidebarItem icon={<Plus />} text={"Create Playlist"} />
          <SidebarItem icon={<Like />} text={"Liked Songs"} />
          <SidebarItem icon={<Bookmark />} text={"Your Episodes"} />
        </div>

        <div className="px-6 py-2 mt-2">
          <hr className=" text-black-3" />
        </div>

        <div className="py-2">
          <ul>
            {myplaylists.map(({ id, text }) => {
              return (
                <li className="px-6">
                  <a href="" className="block py-1 text-gray text-sm">  {text} </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
};

const SidebarItemPrimary = ({ icon, text }: SidebarItemProps) => {
  return (
    <li className="w-full px-2">
      <button className="w-full h-[40px] flex items-center gap-4 px-4 font-bold text-gray text-sm">
        <div>{icon}</div>
        <span> {text} </span>
      </button>
    </li>
  );
};

const SidebarItem = ({ icon, text }: SidebarItemProps) => {
  return (
    <div className="w-full">
      <button className="w-full flex items-center gap-4 py-2 px-6 font-bold text-gray text-sm">
        <div className="w-[24px] h-[24px] flex justify-center items-center rounded-sm  bg-gray p-1 text-white">
          {icon}
        </div>
        <span> {text} </span>
      </button>
    </div>
  );
};

export default Sidebar;
