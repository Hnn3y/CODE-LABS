const App = () => {
  const student = {
    name: 'Ada Lovelace',
    age: 20,
    course: 'Computer Science',
    gpa: 3.8
  }

  const StudentCard = ({ name, age, course, gpa }) => {
    // TODO: Return JSX that displays all student info nicely
    // Format: Name: Ada Lovelace, Age: 20, etc.
    return(
      <>
      <h1>Name: {student.name}, <br/>
        <p>Age:{student.age},</p> <br/> 
        Course:{student.course}, <br/> 
        Gpa:{student.gpa} </h1>
      </>
    )
  }

  return (
    <div>
      {/* TODO: Use StudentCard component here */}
      <StudentCard/>
      </div>
  )
}

export default App
