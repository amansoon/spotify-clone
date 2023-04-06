import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import { useGetAllPlaylistQuery } from "./services/playlist";

function App() {
  const { data, error, isLoading } = useGetAllPlaylistQuery('hi');

  useEffect(() => {
    if(data) {
      console.log("data = ", data);
    }
  }, [data]);

  useEffect(() => {
    if(isLoading) {
      console.log("Loading...")
    }
  }, [isLoading]);

  useEffect(() => {
    if(error) {
      console.log("error = ", error);
    }
  }, [error]);
  


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
