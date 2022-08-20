import React from "react";
import "../design/Stepper.scss";
import "../design/Achievements.css";
import AchievementsBox from "../widgets/AchievementsBox";

export default function Achievement() {
  return (
    <div className="margin_set">
      <div className="wrapper">
        <ol className="c-stepper">
          <AchievementsBox heading="Coding Ninjas" content={"Backed 1st rank in DSA and 5th rank in Java course of coding Ninjas out of 90 students."}/>
          <AchievementsBox heading="Hackathon" content={"Achieved 4th rank our of 70 teams in \"Hack the fest\" competition, organized by Chandigarh University."}/>
          <AchievementsBox heading="Society" content={"Technical Executive of Campus Blocks society associate with Coding Blocks, also received certificate of appreciation as a member of ISTE society in event managing team."}/>
          <AchievementsBox heading="Bootcamp" content={"Completed bootcamp in NodeJS and MongoDB associated with Google Developers Group."}/>
          <AchievementsBox heading="Unstop" content={"Participated in Series of Hackathon taken by different universities all over the nation"}/>
        </ol>
      </div>
    </div>
  );
}
