const App = () => {
const movieDatabase = {
  platform: 'Netflix Wannabe',
  movies: [
    { 
      title: 'The Matrix', 
      director: 'Wachowskis', 
      year: 1999, 
      rating: 8.7 
    },
    { 
      title: 'Inception', 
      director: 'Christopher Nolan', 
      year: 2010, 
      rating: 8.8 
    },
    { 
      title: 'Interstellar', 
      director: 'Christopher Nolan', 
      year: 2014, 
      rating: 8.6 
    }
  ]
}
// Requirements:

//PlatformHeader component
//MovieCard component (shows one movie)
//MovieList component (shows all movies)
//AverageRating component (calculates average rating)
//HighestRated component (finds and displays the highest rated movie)

const Head = ({title}) => {
  return(
    <>
    <h1>Welcome to {title}</h1>
    </>
  )
}

const MovieCard = ({ director, title, year, rating }) => {
  return(
    <>
    <h1>{title}</h1> 
    <h2>Year: {year}</h2>
    <h3>Directed by: {director}</h3>
    <h4>{rating}</h4>
    </>
  )
}

const MovieList = ({ card }) => {
  return(
    <>
    <MovieCard title={card[0].title} director={card[0].director} year={card[0].year} rating={card[0].rating} />
    <MovieCard title={card[1].title} director={card[1].director} year={card[1].year} rating={card[1].rating} />
    <MovieCard title={card[2].title} director={card[2].director} year={card[2].year} rating={card[2].rating} />
    </>
  )
}

const AverageRating = ({ rate }) => {
  return(
    <>
    Average Rating = { rate[0].rating + rate[1].rating + rate[2].rating } 
    </>
  )
}

return(
  <div>
    <Head title={movieDatabase.platform}/>
    <MovieList card={movieDatabase.movies}/>
    <AverageRating rate={movieDatabase.movies}/>
  </div>
)
}

export default App
