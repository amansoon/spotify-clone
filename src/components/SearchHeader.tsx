import React from "react";
import Header from "./Header";
import SearchIcon from "../icons/SearchIcon";

type Props = {};

function SearchHeader({}: Props) {
  return (
    <Header>
      <div>
        <form
          role="search"
          className="relative flex items-center rounded-full overflow-hidden"
        >
          <input
            type="text"
            className="h-[40px] py-[6px] px-[48px] text-black outline-none"
          />
          <div className="absolute fill-black">
            <span>
              <SearchIcon />
            </span>
          </div>
        </form>
      </div>
    </Header>
  );
}

export default SearchHeader;
