import React from "react";
import HomeHeader from "./HomeHeader";
import HomeLanding from "./HomeLanding";
import HomeAbout from "./HomeAbout";
import HomeFooter from "./HomeFooter";

const HomePage = () => {
  return (
    <div className="font-sans bg-green-900">
      <HomeHeader />
      <HomeLanding />
      <HomeAbout />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
