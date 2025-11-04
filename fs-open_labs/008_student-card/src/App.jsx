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
      <h1>Name: {name}, <br/>
        <p>Age:{age},</p> <br/> 
        Course:{course}, <br/> 
        Gpa:{gpa} </h1>
      </>
    )
  }

  return (
    <div>
      {/* TODO: Use StudentCard component here */}
      <StudentCard 
      name={student.name} 
      age={student.age} 
      course={student.course} 
      gpa={student.gpa} />
      </div>
  )
}

export default App
