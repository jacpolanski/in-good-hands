import React from "react";
import HomeAbout from "./home/HomeAbout";
import HomeReason from "./home/HomeReason";
import HomeOrganizations from "./home/HomeOrganizations";
import HomeContact from "./home/HomeContact";
import HomeHeader from "./home/HomeHeader";
import ScrollArrow from "../scss/components/ScrollArrow";

function HomeMain() {
  return (
    <main>
      <ScrollArrow />
      <HomeHeader />
      <HomeReason />
      <HomeAbout />
      <HomeOrganizations />
      <HomeContact />
    </main>
  );
}

export default HomeMain;
