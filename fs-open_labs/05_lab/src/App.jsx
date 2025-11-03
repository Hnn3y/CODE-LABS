import { useState } from 'react'

const App = () => {
  const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
  }


// TODO: Console log the brand
// TODO: Console log the year
// TODO: Add a new property 'color' with value 'blue'
car.color='blue'
// TODO: Console log the entire car object

const Part = ({ my }) => {
  return(
    <h1>{my}</h1>
  )
}

const Pt = ({ brand, model, year, color }) => {
  return(
    <h1>{brand}: {model} {year} {color}</h1>
  )
}

return (
  <>
    <Part my={car.brand} />
    <Part my={car.model} />
    <Part my={car.year} />
    <Part my={car.color} />
    <Pt brand={car.brand} model={car.model} year={car.year} color={car.color}/>
  </>
)
}
export default App


// Create an object for a car and access its properties1l
