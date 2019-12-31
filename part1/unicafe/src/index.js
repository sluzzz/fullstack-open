import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  const Button = ({ name }) => {
    return (
      <div>
        <button>{name}</button>
      </div>
    );
  };

  const Stat = ({ text, value }) => {
    return (
      <div>
        <p>
          {text} {value}
        </p>
      </div>
    );
  };

  const Statistics = props => {
    return (
      <div>
        <Stat text="good" value={good} />
        <Stat text="neutral" value={neutral} />
        <Stat text="bad" value={bad} />
        <Stat text="all" value={all} />
        <Stat text="average" value={all / 3} />
        <Stat text="positive" value={(good / all) * 100} />
        %ovaj znak ne valja i average ne valja
      </div>
    );
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" />
      <Button name="neutral" />
      <Button name="bad" />
      <button>ne valjaju buttoni u redu s reactom</button>
      <button>n</button>
      <button>b</button>
      <h1>statistics</h1>
      <Statistics />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
