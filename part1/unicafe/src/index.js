import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// todo buttons nisu isti ko na primjeru al nije tolko bitno

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  const Button = ({ name, onClick }) => {
    return (
      <div>
        <button onClick={onClick}>{name}</button>
      </div>
    );
  };

  const Statistic = ({ text, value }) => {
    if (text === 'positive') {
      return (
        <p>
          {text} {value} %
        </p>
      );
    }

    return (
      <p>
        {text} {value}
      </p>
    );
  };

  const Statistics = props => {
    if (all === 0) return <div>No feedback given</div>;

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Statistic text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="average" value={(good * 1 + bad * -1) / all} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="positive" value={(good / all) * 100} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  // todo refractor these
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={handleGoodClick}>
        good
      </Button>
      <Button name="neutral" onClick={handleNeutralClick}>
        neutral
      </Button>
      <Button name="bad" onClick={handleBadClick}>
        bad
      </Button>
      <h1>statistics</h1>
      <Statistics />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
