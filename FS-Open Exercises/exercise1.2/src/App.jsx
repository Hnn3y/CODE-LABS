const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // Refactor the code so that it consists of three new components: Header, Content, and Total.
  //  Header takes care of rendering the name of the course, 
  // Content renders the parts and their number of exercises 
  // and Total renders the total number of exercises.

const Header = ({ course }) => {
  return(
    <div>
    <h1>{course}</h1>
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <>
    <Part part={part1} exercises={exercises1} />
    <Part part={part2} exercises={exercises2} />
    <Part part={part3} exercises={exercises3} />
    </>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return(
    <>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

  return (
    <div>
      <Header course={course}/>
     <Content 
     part1={part1} exercises1={exercises1}
     part2={part2} exercises2={exercises2}
     part3={part3} exercises3={exercises3}/>
     <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App