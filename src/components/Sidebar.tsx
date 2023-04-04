import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="w-[300px] h-full bg-black">
      <div className="flex flex-col">
        <SidebarItem icon="" text={"Create Playlist"} />
        <SidebarItem icon="" text={"Liked Songs"} />
        <SidebarItem icon="" text={"Your Episodes"} />
      </div>
    </div>
  );
}

type SidebarItemProps = {
  icon: string;
  text: string;
};

const SidebarItem = ({ text, icon }: SidebarItemProps) => {
  return (
    <div className="">
      <button className="flex py-2 px-6">
        <span> {icon} </span>
        <span> {text} </span>
      </button>
    </div>
  );
};

export default Sidebar;
