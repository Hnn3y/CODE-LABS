//->> PROJECT: Course Information Refactor (01_course-refactor)
// Goal: Split App into Header, Content, Total, and Part components with strict prop usage

// Header component
const Header = ({ course }) => {
  // TODO: Render the course title inside an <h1>
  return (
    <div>
      <h1>{/* course name here */}</h1>
    </div>
  );
};

// Part component
const Part = ({ name, exercises }) => {
  // TODO: Render "part name + exercises"
  return (
    <p>
      {/* name */} {/* exercises */}
    </p>
  );
};

// Content component
const Content = ({ parts }) => {
  // TODO: Render 3 <Part /> components, each receiving props from parts[]
  return (
    <div>
      {/* Example: <Part name={parts[0].name} exercises={parts[0].exercises} /> */}
    </div>
  );
};

// Total component
const Total = ({ parts }) => {
  // TODO: Compute and render the sum of all exercises
  return (
    <p>
      {/* Number of exercises: ... */}
    </p>
  );
};

// App root
const App = () => {
  const course = "Half Stack application development";

  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
