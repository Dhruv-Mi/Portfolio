import React from "react";
import "../design/Intro.css";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <>
      <div className="type_write h-52">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hello,<br> I\'m Dhruv Mittal, A Self Taught Developer,<br>I Enjoy learning about the breakthrough in technology<br> and think that hardwork always paysoff!!!')
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
    </>
  );
}
