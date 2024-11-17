import React from "react";
import HomeTitleSection from "./homeTitleSections";

const info = [
  {
    year: "2024",
    course: "react",
    academy: "Pelle be pelle academy",
    percentage: "91.77",
  },
  {
    year: "2023",
    course: "Frontend",
    academy: "Pelle be pelle academy",
    percentage: "93.80",
  },
  {
    year: "2013",
    course: "Software engineering",
    academy: "Shahid Rajaee university",
    percentage: "79.30",
  },
];

const HomeEdu = () => {
  return (
    <div>
      <HomeTitleSection title="Education Background" />
      <div className="space-y-4">
        {info.map((item, index) => {
          return (
            <p key={index} className="leading-4">
              <span className="font-semibold text-xs text-stone-600">{item.year}<br/></span>
              <span className="uppercase text-sm"><span className="text-red-500">{item.course}</span>, {item.academy}</span><br/>
              <span className="font-semibold text-xs text-stone-600">Percentage : {item.percentage}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default HomeEdu;
