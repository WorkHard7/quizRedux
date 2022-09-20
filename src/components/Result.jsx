import React from "react";
import { useSelector } from "react-redux";

export function Result({ questions }) {
  const myResult = useSelector((state) => state.result);

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        `You guessed {myResult} answers from {questions.length}`
      </h2>
      <a href="/">
        <button>Try again!</button>
      </a>
    </div>
  );
}
