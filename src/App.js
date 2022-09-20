import "./index.scss";
import React from "react";
import { Game } from "./components/Game";
import { Result } from "./components/Result";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep } from "./actions/incrementStep";
import { changeResult, changeResultParam } from "./actions/changeResult";
import { questions } from "./utils/questions";

function App() {
  const dispath = useDispatch();

  const myStep = useSelector((state) => state.step);
  const myResult = useSelector((state) => state.result);
  const question = questions[myStep];

  const onClickVariant = (index) => {
    dispath(incrementStep());

    index === question.correct
      ? dispath(changeResult())
      : changeResultParam(myResult);
  };

  return (
    <div className="App">
      {myStep !== questions.length ? (
        <Game
          questions={questions}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result questions={questions} />
      )}
    </div>
  );
}

export default App;
