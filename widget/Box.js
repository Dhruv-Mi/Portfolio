import React from "react";
import "../design/Box.css";

export default function Box(props) {
  return (
    <>
      <div className="flex flex-row height margin_correct">
        {/* <div className="flex basis-16 mb-2 justify-center h-full">
          <i className={`${props.iconClass} marginTop`}></i>
        </div> */}
        <div className="basis-full bg_color rounded-lg text_size">
          {props.content}
        </div>
      </div>
    </>
  );
}
