import { useState } from "react";

export const Feedback = () => {
  const [good, goodSet] = useState(0);
  const [neutral, neutralSet] = useState(0);
  const [bad, badSet] = useState(0);

  const goodCounter = () => {
    goodSet(good + 1);
  };
  const neutralCounter = () => {
    neutralSet(neutral + 1);
  };
  const badCounter = () => {
    badSet(bad + 1);
  };

  return (
    <>
      <div>
        <h1>Please leave a feedback</h1>
        <button onClick={goodCounter}>Good</button>
        <button onClick={neutralCounter}>Neutral</button>
        <button onClick={badCounter}>Bad</button>
      </div>
      <div>
        <h2>Statics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <p>
            Positive procent:
            {Math.round((good * 100) / (good + neutral + bad))}%
          </p>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    </>
  );
};
