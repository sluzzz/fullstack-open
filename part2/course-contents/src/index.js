import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  };

  const Header = props => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    );
  };

  const Part = props => {
    console.log(props);

    return (
      <div>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </div>
    );
  };

  const Content = props => {
    return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
        <Part part={props.parts[3]} />
      </div>
    );
  };

  const Total = ({ parts }) => {
    return (
      <div>
        <p>
          <strong>
            total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)}{' '}
            exercises
          </strong>
        </p>
      </div>
    );
  };

  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
