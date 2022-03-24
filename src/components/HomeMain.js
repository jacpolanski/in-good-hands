import React from "react";
import HomeAbout from "./home/HomeAbout";
import HomeReason from "./home/HomeReason";
import HomeOrganizations from "./home/HomeOrganizations";
import HomeContact from "./home/HomeContact";
import HomeHeader from "./home/HomeHeader";

function HomeMain() {
  return (
    <main>
      <HomeHeader />
      <HomeReason />
      <HomeAbout />
      <HomeOrganizations />
      <HomeContact />
    </main>
  );
}

export default HomeMain;
