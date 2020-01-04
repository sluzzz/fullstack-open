import React from 'react';

const Header = props => {
  return (
    <div>
      <h2>{props.course.name}</h2>
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};

const Content = ({ parts }) => {
  const partsMapped = parts.map(part => <Part key={part.id} part={part} />);
  return <div>{partsMapped}</div>;
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

export default Course;
