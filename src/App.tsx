import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import { useGetAllPlaylistQuery } from "./services/playlist";
import {
  useGetProfileQuery,
  useGetTopArtistsQuery,
  useGetFollowedArtistsQuery,
  useGetTopTracksQuery,
} from "./services/user";

import { useSelector, useDispatch } from "react-redux";
import { setFollowedArtists, setProfile, setTopTracks } from "./features/user/userSlice";
import { setTopArtists } from "./features/user/userSlice";

function App() {
  const profileRes = useGetProfileQuery("hi");
  const topArtistsRes = useGetTopArtistsQuery("hi");
  const topTracksRes = useGetTopTracksQuery("hi");
  const followedArtistsRes = useGetFollowedArtistsQuery("hi");

  const dispatch = useDispatch();
  

  useEffect(() => {
    // console.log(profileRes);
    if (profileRes.isSuccess) {
      dispatch(setProfile(profileRes.data));
    }
  }, [profileRes]);


  useEffect(() => {
    console.log(topArtistsRes);
    if (topArtistsRes.isSuccess) {
      dispatch(setTopArtists(topArtistsRes.data));
    }
  }, [topArtistsRes]);


  useEffect(() => {
    // console.log(topTracksRes);
    if (topTracksRes.isSuccess) {
      dispatch(setTopTracks(topTracksRes.data))
    }
  }, [topTracksRes]);


  useEffect(() => {
    // console.log(followedArtistsRes);
    if (followedArtistsRes.isSuccess) {
      dispatch(setFollowedArtists(followedArtistsRes.data.artists))
    }
  }, [followedArtistsRes]);


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
