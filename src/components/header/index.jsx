import React from "react";
import PersonalPhoto from "./personalPhoto";

const Header = () => {
  return (
    <div className="bg-teal-400 xs:py-8 relative sm:pt-4 xs:flex xs:flex-row-reverse xs:content-center xs:justify-around">
      <div className="text-white sm:text-center xs:w-[40%] xs:pt-6 sm:w-[100%] sm:pl-[100px] md:pl-0">
        <h1 className="font-semibold text-2xl">Saba Shakeraneh</h1>
        <h2 className="xs:text-xs text-sm xs:pt-2">Software Engineer</h2>
      </div>
      <PersonalPhoto />
    </div>
  );
};

export default Header;
