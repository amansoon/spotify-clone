import React from "react";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Main from "../components/Main";

type Props = {
  children?: React.ReactNode;
};

function Page({ children }: Props) {
  return (
    <div className="grid grid-cols-[400px 1fr] grid-rows-[1fr auto] h-[100vh]">
      <Sidebar />
      <Player />
      <Main> {children} </Main>
    </div>
  );
}

export default Page;
