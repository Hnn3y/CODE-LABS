const App = () => {
  const product1 = { name: 'Laptop', price: 1200 }
  const product2 = { name: 'Mouse', price: 25 }
  const product3 = { name: 'Keyboard', price: 75 }

  const Product = ({ name, price }) => {
    // TODO: Display product name and price
    return(
      <>
      <h1>{name} : {price}</h1>
      </>
    )
  }

  const ProductList = ({ prod1, prod2, prod3 }) => {
    // TODO: Display all 3 products using Product component
    return(
      <>
    <Product name={prod1.name}  price={prod1.price}/>
    <Product name={prod2.name} price={prod2.price}/>
    <Product name={prod3.name} price={prod3.price}/>
    </>
    )
  }

  const TotalPrice = ({ prod1, prod2, prod3 }) => {
    // TODO: Calculate and display total price of all products
    return(
      <>
      <h2>Total = $ {prod1.price + prod2.price + prod3.price}</h2>
      </>
    )
  }

  return (
    <div>
      {/* TODO: Use ProductList and TotalPrice */}
      <ProductList prod1={product1}
       prod2={product2}
      prod3={product3}/>
      <TotalPrice prod1={product1}
       prod2={product2}
      prod3={product3}/>
    </div>
  )
}

export default App