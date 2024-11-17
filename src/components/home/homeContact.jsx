import React from "react";
import HomeTitleSection from "./homeTitleSections";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const HomeContact = () => {
  return (
    <div>
      <HomeTitleSection title="My Contact" />
      <ul className="space-y-0.5 text-sm">
      <li>
        <LinkedInIcon className="pr-[7px]"/>
        saba_sana1395@yahoo.com
      </li>
      <li>
        <PhoneIcon className="pr-[7px]" />
        +989102110308
      </li>
      <li>
        <FacebookIcon className="pr-[7px]" />
        Saba_Shakeraneh
      </li>
      <li>
        <TwitterIcon className="pr-[7px]" />
        Saba_Sh
      </li>
      </ul>
    </div>
  );
};

export default HomeContact;
