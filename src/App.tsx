import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RootState } from "./app/store";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Collections from "./pages/Collections";
import Playlist from "./pages/Playlist";
import Artist from "./pages/Artist";
import User from "./pages/User";
import { useGetGenresQuery } from "./services/user";
import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "./features/app/appSlice";
import Playlists from "./pages/Playlists";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Podcasts from "./pages/Podcasts";
import Episodes from "./pages/Episodes";

// import { useGetAllPlaylistQuery } from "./services/playlist";
// import {
//   useGetProfileQuery,
//   useGetTopArtistsQuery,
//   useGetFollowedArtistsQuery,
//   useGetTopTracksQuery,
// } from "./services/user";

// import { useSelector, useDispatch } from "react-redux";
// import { setFollowedArtists, setProfile, setTopTracks } from "./features/user/userSlice";
// import { setTopArtists } from "./features/user/userSlice";

function App() {
  const genresRes = useGetGenresQuery("hi");
  // const profileRes = useGetProfileQuery("hi");
  // const topArtistsRes = useGetTopArtistsQuery("hi");
  // const topTracksRes = useGetTopTracksQuery("hi");
  // const followedArtistsRes = useGetFollowedArtistsQuery("hi");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(genresRes);
    if (genresRes.isSuccess) {
      dispatch(setGenres(genresRes.data.genres));
    }
  }, [genresRes]);

  // useEffect(() => {
  //   // console.log(profileRes);
  //   if (profileRes.isSuccess) {
  //     dispatch(setProfile(profileRes.data));
  //   }
  // }, [profileRes]);

  // useEffect(() => {
  //   console.log(topArtistsRes);
  //   if (topArtistsRes.isSuccess) {
  //     dispatch(setTopArtists(topArtistsRes.data));
  //   }
  // }, [topArtistsRes]);

  // useEffect(() => {
  //   // console.log(topTracksRes);
  //   if (topTracksRes.isSuccess) {
  //     dispatch(setTopTracks(topTracksRes.data))
  //   }
  // }, [topTracksRes]);

  // useEffect(() => {
  //   // console.log(followedArtistsRes);
  //   if (followedArtistsRes.isSuccess) {
  //     dispatch(setFollowedArtists(followedArtistsRes.data.artists))
  //   }
  // }, [followedArtistsRes]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
          <Route path="/artist/:artistId" element={<Artist />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/collection" element={<Collections />}>
            <Route path="playlists" element={<Playlists />} />
            <Route path="artists" element={<Artists />} />
            <Route path="albums" element={<Albums />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="episodes" element={<Episodes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
