//->>PROJECT:- Digital Visiting Card
// A simple React component renders your name, a fun tagline, and today’s date/time (new Date().toString()).

// App.jsx
const App = () => {
  const name = "HENNEiY";
  const tagline = "Building, Breaking, and Becoming Better ";
  const currentDate = new Date().toString();

  const Name = ({ person }) => {
    return (
        <h1 className="text-3xl font-bold mb-2">{person}</h1>
    )
  }

  const Tag = ({ line }) => {

    return (
      <p className="text-lg italic mb-4">{line}</p>
    )
  }

  const DateDisplay = ({ checkin }) => {

    return (
      <p className="text-sm text-gray-400">Today: {checkin}</p>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <Name person={name}/>
        <Tag line={tagline}/>
        <DateDisplay checkin={currentDate}/>
      </div>
    </div>
  );
};

export default App;
