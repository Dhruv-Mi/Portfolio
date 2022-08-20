import React from "react";
import "../design/Button_Animation.scss";

export default function Navbar(props) {

  return (
    <>
      <ul className="flex flex-row justify-center relative">
        <li className="mx-2 mt-2">
            <button type="button" onClick={props.fun[0]} className="btn projects">Projects</button>
        </li>
        <li className="mx-2 mt-2">
            <button type="button" onClick={props.fun[1]} className="btn skills">Skills</button>
        </li>
        <li className="mx-2 mt-2">
            <button type="button" onClick={props.fun[2]} className="btn achievement">Achievements</button>
        </li>
      </ul>
    </>
  );
}
