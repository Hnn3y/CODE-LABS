const App = () => {
   const course = 'Half Stack application development'
   const part1 = {
     name: 'Fundamentals of React',
     exercises: 10
   }
   const part2 = {
     name: 'Using props to pass data',
     exercises: 7
   }
   const part3 = {
     name: 'State of a component',
     exercises: 14
   }
   

   //1.3: Modify the variable definitions of the App component as follows and also refactor the application so that it still works:
   const Header = ({ course }) => {
    return (
      <>
      <h1>{course}</h1>
      </>
    )
   }

   const Part = ({part: { name, exercises}}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
   }

   const Content = ({ part1, part2, part3 }) => {
    return (
      <>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
      </>
    )
   }

   const Total = ({ exercises }) => {
    return (
      <>
      <p>
        Number of exercises {}
      </p>
      </>
    )
   }

   return (
     <div>
      <Header course={course}/>
      <Content
      part1={part1}
      part2={part2}
      part3={part3}/>
     </div>
   )
 }

 export default App