import React from "react";

export default function AchievementsBox(props) {
  return (
    <li className="c-stepper__item">
      <div className="c-stepper__content">
        <h3 className="c-stepper__title">{props.heading}</h3>
        <p className="c-stepper__desc">
          {props.content}
        </p>
      </div>
    </li>
  );
}
