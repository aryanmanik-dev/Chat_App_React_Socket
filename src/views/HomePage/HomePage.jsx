import React from "react";
import LeftMenu from "../../components/LeftMenu.jsx/LeftMenu";
import Messenger from "../../components/LeftMenu.jsx/Messenger";
import RightContent from "../../components/RightContent/RightContent";
import UserChat from "../../components/RightContent/UserChat";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex min-w-[100%] md:min-w-[40%]">
        <LeftMenu />
        <Messenger />
      </div>
      <div className="hidden md:block md:min-w-[60%]">
        {/* <RightContent /> */}
        <UserChat/>
      </div>
    </div>
  );
};

export default HomePage;
