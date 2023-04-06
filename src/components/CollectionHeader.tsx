import React, {useState, useEffect} from "react";
import Header from "./Header";
import { useLocation, useNavigation } from "react-router-dom";


type Props = {};

function CollectionHeader({}: Props) {
  const navItems = [
    {
      id: 1,
      name: "Playlist",
      url: "/collection/playlists",
    },
    {
      id: 2,
      name: "Podcasts",
      url: "/collection/podcasts",
    },
    {
      id: 3,
      name: "Artists",
      url: "/collection/artists",
    },
    {
      id: 4,
      name: "Albums",
      url: "/collection/albums",
    },
  ];

  return (
    <Header>
      <nav className="pl-6 flex items-center">
        <ul className="flex">
          {navItems.map((item) => {
            return <NavItem {...item} id={item.id} />;
          })}
        </ul>
      </nav>
    </Header>
  );
}

type NavItemProps = {
  id: string | number;
  name: string;
  url: string;
};

const NavItem = ({ id, name, url }: NavItemProps) => {
  const location = useLocation();
  const [isActive, setActive] = useState<boolean>(false)

  useEffect(() => {
     if(location.pathname === url) {
        setActive(true)
     }
  }, [location])
  

  return (
    <li>
      <a href={url} className={"block mr-2 px-4 py-2 rounded hover:bg-black " + (isActive ? "bg-black-1" : "bg-transparent")}>
        <span className="text-sm leading-6"> {name} </span>
      </a>
    </li>
  );
};

export default CollectionHeader;
