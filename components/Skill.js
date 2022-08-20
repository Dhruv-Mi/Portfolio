import React from "react";
import SkillsBox from "../widgets/SkillsBox";

export default function Skill() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <SkillsBox heading="Fundamentals" content={["DBMS","Data Structures and Algorithms","OOPS"]} />
      <SkillsBox heading="Languages" content={["C/C++","CSS","HTML","Javascript","Java","Python"]}/>
      <SkillsBox heading="Technologies" content={["Bootstrap","ReactJS","Tailwind CSS"]}/>
    </div>
  );
}
