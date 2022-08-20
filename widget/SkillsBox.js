import React from "react";
import "../design/Skills.css";

export default function Skills_Box(props) {
  return (
    <div className="col-start-2 col-span-4 rounded-lg m-1">
      <p className="design_heading margin_correct">{props.heading}</p>
      <p className="text-center bg-sky-300 rounded-lg design margin_correct">{props.content[0]}</p>
      <p className="text-center bg-cyan-500 rounded-lg design margin_correct">{props.content[1]}</p>
      <p className="text-center bg-blue-600 rounded-lg design margin_correct">{props.content[2]}</p>
      <p className="text-center bg-pink-400 rounded-lg design margin_correct">{props.content[3]}</p>
      <p className="text-center bg-lime-300 rounded-lg design margin_correct">{props.content[4]}</p>
      <p className="text-center bg-teal-400 rounded-lg design margin_correct">{props.content[5]}</p>
    </div>
  );
}
