import React from "react";
import HomeTitleSections from "./homeTitleSections";

const HomeProExp = () => {
  return (
    <div>
      <HomeTitleSections title="Professional Experience" />
      <div>
        <h4 className="text-base font-medium">Tailwind | Fronend Developer</h4>
        <span className="font-semibold text-xs mb-[5px] block">2024 - Present</span>
        <span className="block text-sm font-bold">Key Responsibilities</span>
        <ul className="list-disc list-inside text-sm mb-[25px]">
            <li>Shortest path with obstacles</li>
            <li>Euclidean space</li>
            <li>Nothing</li>
        </ul>
        <h4 className="text-base font-medium">Finding Shortest Path | Software Engineer</h4>
        <span className="font-semibold text-xs  mb-[5px] block">2013 - 2014</span>
        <span className="block text-sm font-bold">Key Responsibilities</span>
        <ul className="list-disc list-inside text-sm">
            <li>Shortest path with obstacles</li>
            <li>Euclidean space</li>
            <li>Nothing</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeProExp;
