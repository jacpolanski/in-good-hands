import React from "react";
import HomeLog from "./HomeLog";
import HomeNav from "./HomeNav";

function HomeNavHeader() {
  return (
    <>
      <div className="container">
        <HomeLog />
        <HomeNav />
      </div>
    </>
  );
}

export default HomeNavHeader;
