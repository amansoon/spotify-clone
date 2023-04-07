import React from "react";
import Page from "./Page";
import Header from "../components/Header";
import CollectionHeader from "../components/CollectionHeader";
import { Outlet } from "react-router-dom";


function Collections() {
  return (
    <Page>
      <CollectionHeader />
      <Outlet />
    </Page>
  );
}

export default Collections