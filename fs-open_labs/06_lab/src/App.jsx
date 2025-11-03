const App = () => {
  const numbers = [5, 10, 15, 20, 25]

// TODO: Use .map() to create a new array where each number is divided by 5
// TODO: Use .forEach() to console log each number
// TODO: Access and print the 3rd number (15)

numbers.map(num => console.log(num/5))
numbers.forEach(num => console.log(num))
console.log(numbers[2])


const Cal = ({ Digit }) => {
  return(
    <h1>Each number is divided by 5 {Digit}</h1>
  )
}

return(
  <>
  </>
)
}
 

export default App
