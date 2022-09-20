import "./index.scss";
import React from "react";
import { Game } from "./components/Game";
import { Result } from "./components/Result";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep } from "./actions/incrementStep";
import { changeResult, changeResultParam } from "./actions/changeResult";
import { questions } from "./utils/questions";

function App() {
  const dispatch = useDispatch();

  const myStep = useSelector((state) => state.step);
  const myResult = useSelector((state) => state.result);
  const question = questions[myStep];

  const onClickVariant = (index) => {
    dispatch(incrementStep());

    index === question.correct && dispatch(changeResult());
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
