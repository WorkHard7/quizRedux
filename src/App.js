import "./index.scss";
import React from "react";

const questions = [
  {
    title: "React - is ... ?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "Component - is ... ",
    variants: [
      "an application",
      "a part of application or page",
      "this is something I don't know",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "Simple HTML",
      "It's a function",
      "The same HTML, but can contain JS code",
    ],
    correct: 2,
  },
];

function Result({ result }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        `You guessed {result} answers from {questions.length}`
      </h2>
      <a href="/">
        <button>Try again!</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.floor((step / questions.length) * 100);

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

function App() {
  const [step, setStep] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    index === question.correct ? setResult(result + 1) : setResult(result);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          result={result}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result questions={questions} result={result} />
      )}
    </div>
  );
}

export default App;
