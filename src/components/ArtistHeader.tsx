import React, {useState, useEffect} from "react";
import Header from "./Header";
import { Link, useLocation, useNavigation } from "react-router-dom";


type Props = {};

function ArtistHeader({}: Props) {
  return (
    <Header>
       <div className="h-[50px] w-[50px] bg-green rounded-full">
 
       </div>
    </Header>
  );
}


export default ArtistHeader;