import React from "react";
import HomeLog from "./header/HomeLog";
import HomeNav from "./header/HomeNav";
import HomeHeader from "./header/HomeHeader";

function HomeNavHeader(props) {
  return (
    <>
      <HomeLog />
      <HomeNav />
      <HomeHeader />
    </>
  );
}

export default HomeNavHeader;
