const App = () => {
  const restaurant = {
    name: 'Tasty Bites',
    menu: [
      { dish: 'Jollof Rice', price: 1500, category: 'Main' },
      { dish: 'Suya', price: 2000, category: 'Grill' },
      { dish: 'Puff Puff', price: 500, category: 'Snack' }
    ]
  }

  // TODO: Create RestaurantHeader component
  // TODO: Create MenuItem component (displays one dish)
  // TODO: Create Menu component (displays all menu items)
  // TODO: Create TotalCost component (calculates total of all prices)

  const RestaurantHeader = ({ title }) =>{
    return(
      <>
      <h1>Welcome to {title}</h1>
      </>
    )
  }

  const MenuItem = ({ dish, price, category }) => {
    return(
      <>
      <h3>{category} <br></br>
      - {dish} {price} </h3>
      </>
    )
  }

  const Menu = ({items}) => {
    return(
      <>
            <h2>Dishes available</h2>
      <MenuItem dish={items[0].dish} price={items[0].price} category={items[0].category} />
      <MenuItem dish={items[1].dish} price={items[1].price} category={items[1].category} />
      <MenuItem dish={items[2].dish} price={items[2].price} category={items[2].category} />
      </>
    )
  }

  const Total = ({bill}) => {
    return(
      <>
      Total bill = {bill[0].price + bill[1].price + bill[2].price}
      </>
    )
  }
  
  return (
    <div>
      {/* TODO: Compose your app */}
      < RestaurantHeader title={restaurant.name}/>
      <Menu items={restaurant.menu}/>
      <Total bill= {restaurant.menu}/>
    </div>
  )
}

export default App
