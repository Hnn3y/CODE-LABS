// 1.4: Course Information step 4
// Place the objects into an array. 
// Modify the variable definitions of App into the following form and modify the other parts of the application accordingly

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]

  const Header = ({ course }) => {
    return (
      <h1>
        {course}
      </h1>
    )
  }

  const Part = ({ parts: {name, exercises}}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }

  const Content = ({ parts }) => {

    return(
      <>
      <Part part={parts[0]} />
      </>
    )
  }

  return (
    <div>
      <Header course= {course}/>
      <Content
      part={parts[0]}/>
    </div>
  )
}

export default App