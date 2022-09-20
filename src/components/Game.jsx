import React from "react";
import { useSelector } from "react-redux";

export function Game({ question, questions, onClickVariant }) {
  const myStep = useSelector((state) => state.step);

  const percentage = Math.floor((myStep / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li onClick={() => onClickVariant(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
