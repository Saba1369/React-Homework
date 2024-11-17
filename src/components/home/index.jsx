import React from "react";
import HomeContact from "./homeContact";
import HomeSkills from "./homeSkills";
import HomeEdu from "./homeEdu";
import HomeAbout from "./homeAbout";
import HomeProExp from "./homeProExp";
import HomeProjects from "./homeProjects";

const Home = () => {
  return (
    <div className="flex px-6 gap-[20%] xs:flex-col-reverse sm:flex-row">
      <div className="space-y-8 sm:pt-[60px] xs:py-8">
        <HomeContact />
        <HomeSkills />
        <HomeEdu />
      </div>
      <div className="space-y-8 pt-[40px]">
        <HomeAbout/>
        <HomeProExp/>
        <HomeProjects/>
      </div>
    </div>
  );
};

export default Home;
