import React from "react";
import "../design/Container.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Icon from "./Icon";
import "../design/Icon_Animation.scss";
import { useState } from "react";
import Project from "./Project";
import ParticlesBg from "particles-bg";
import Skill from "./Skill";
import Achievement from "./Achievement";

export default function Container() {
  const screenWidth = () => {
    const width = window.screen.width;
    if(width>=500&&width<1000){
      return 40
    }
    else if (width < 500) {
      return 25;
    } else {
      return 100;
    }
  };

  const screenHeight = () => {
    const width = window.screen.width;
    if(width>=500&&width<1000){
      return 800
    }
    else if (width < 500) {
      return 750;
    } else {
      return 750;
    }
  };

  const [Content, setContent] = useState(<Project />);

  const projectClicked = () => {
    setContent(<Project />);
  };

  const skillsClicked = () => {
    setContent(<Skill />);
  };

  const AchievementsClicked = () => {
    setContent(<Achievement />);
  };

  return (
    <>
      <div className="flex-wrap">
        <div className="h-80 flex justify-center flex-col grad_top">
          <div className="container">
            <Intro />
          </div>
          <div className="flex justify-center social-buttons">
            <Icon
              href="https://www.instagram.com/dhruv_mittal10/"
              aclass="cursor-pointer social-buttons__button social-button social-button--instagram"
              classes="fa-brands fa-instagram"
            />

            <Icon
              href="https://www.facebook.com/dhruv.mittal.752"
              aclass="cursor-pointer social-buttons__button social-button social-button--facebook"
              classes="fa-brands fa-facebook"
            />

            <Icon
              href="https://github.com/Dhruv-Mi"
              aclass="cursor-pointer social-buttons__button social-button social-button--github"
              classes="fa-brands fa-github"
            />

            <Icon
              href="https://www.linkedin.com/in/dhruv-mittal-87529423a/"
              aclass="cursor-pointer social-buttons__button social-button social-button--linkedin"
              classes="fa-brands fa-linkedin"
            />
          </div>
        </div>
        <div>
          <ParticlesBg
            color="A855F7"
            num={screenWidth()}
            type="cobweb"
            bg={{
              position: "absolute",
              zIndex: -1,
              height:screenHeight()
            }}
          />
          <div className="container-lg">
            <Navbar
              fun={[projectClicked, skillsClicked, AchievementsClicked]}
            />
          </div>
          <div className="mt-4">{Content}</div>
        </div>
      </div>
    </>
  );
}
