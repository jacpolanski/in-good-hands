import React from "react";
import HomeAbout from "./home/HomeAbout";
import HomeReason from "./home/HomeReason";
import HomeOrganizations from "./home/HomeOrganizations";
import HomeContact from "./home/HomeContact";
import HomeNavHeader from "./home/HomeNavHeader";

function HomeMain(props) {
  return (
    <div>
      <HomeNavHeader />
      <HomeReason />
      <HomeAbout />
      <HomeOrganizations />
      <HomeContact />
    </div>
  );
}

export default HomeMain;
