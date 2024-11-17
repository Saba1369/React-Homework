import React from "react";
import HomeTitleSections from "./homeTitleSections";

import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import CssIcon from "@mui/icons-material/Css";
import InfoIcon from "@mui/icons-material/Info";

const HomeSkills = () => {
  return (
    <div>
      <HomeTitleSections title="Skills"/>
      <ul className="space-y-0.5 text-sm">
      <li>
        <JavascriptIcon className="pr-[3px]"/>
        Java Script
      </li>
      <li>
        <CodeIcon className="pr-[3px]" />
        Html
      </li>
      <li>
        <CssIcon className="pr-[3px]" />
        CSS
      </li>
      <li>
        <InfoIcon className="pr-[3px]" />
        Tailwind CSS
      </li>
      </ul>
    </div>
  );
};

export default HomeSkills;
