import React from "react";
import Box from "../widgets/Box";

export default function Project() {
  let mp4="A MP-4 video player ,Having a list of songs to play";
  let textUtils="An app to allow the user to change the text according to the need"
  let notes="An app to create notes for the user to remain ontime";
  let snake="A snake game which reminds you of your childhood(Play and Enjoy)";
  let facedetection="A face detection system ,Detects the face in real time";
  let flappybird="A flappy bird game in python"
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 text-center rounded-lg">
          <Box iconClass="fa-solid fa-circle-play fa-2x" content={mp4}/>
        </div>
        <div className="col-start-2 col-span-4 text-center">
          <Box iconClass="fa-solid fa-input-font fa-2x" content={textUtils}/>
        </div>
        <div className="col-start-2 col-span-4 text-center">
          <Box iconClass="fa-solid fa-note fa-2x" content={notes}/>
        </div>
        <div className="col-start-2 col-span-4 text-center">
          <Box iconClass="fa-solid fa-snake fa-2x" content={snake}/>
        </div>
        <div className="col-start-2 col-span-4 text-center">
          <Box iconClass="fa-solid fa-code fa-2x" content={facedetection}/>
        </div>
        <div className="col-start-2 col-span-4 text-center">
          <Box iconClass="fa-solid fa-bird fa-2x" content={flappybird}/>
        </div>
      </div>
    </>
  );
}
