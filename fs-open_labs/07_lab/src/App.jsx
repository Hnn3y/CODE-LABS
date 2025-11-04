const App = () => {
  const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 92 },
    { name: 'Bob', grade: 78 }
  ]

  console.log(students[1].grade)
  students.map(student => console.log(student.name))
  students.map(student => console.log(student.grade+5))


  return(
    <>
    </>
  )
}

export default App



// TODO: Console log Jane's grade
// TODO: Use .map() to create an array of just the names
// TODO: Use .map() to create an array of grades increased by 5