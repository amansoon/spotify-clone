import React from "react";
import Page from "./Page";
import ArtistHeader from "../components/ArtistHeader";
import VerifiedIcon from "../icons/VerifiedIcon";

type Props = {};

function Artist({}: Props) {
  return (
    <Page>
        <ArtistHeader />
        <div className="absolute -z-10 top-0 left-0 right-0  min-h-[80vh] bg-red-500">
        </div>
        <Profile />
          <img src="../../public/arijit.jpg" alt="arjit singh image" className="h-[300px] w-[100%] bg-blue-600 " />
    </Page>
  );
}

const Profile = () => {
  return (
    <div className="h-[40vh] min-h-[340px] flex items-end px-[32px] py-[24px]">
      <div className="flex flex-col">
        {/* --------- */}
        <div className="flex items-center gap-3">
          {/* verified icon */}
          <div className="isolate relative flex justify-center items-center">
            <VerifiedIcon />
            <div className="absolute -z-10 w-[15px] h-[15px] min-w-[15px] bg-white"> </div>
          </div>
          {/* verified text */}
          <span className="text-sm leading-none"> Verified Artist </span>
        </div>
        {/* --------- */}
        <div>
          <h1 className="text-[92px] font-bold"> Arijit Singh </h1>
        </div>
        {/* ------- */}
        <div className="mt-1">29,620,542 monthly listeners</div>
      </div>
    </div>
  );
};

export default Artist;
